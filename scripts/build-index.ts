import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type {
	Ability,
	BaseStats,
	PokedexEntry,
	PokemonDetail,
} from '../src/data/schema'
import type { TypeName } from '../src/data/meta'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CACHE_DIR = join(ROOT, 'scripts', '.cache')
const INDEX_OUT = join(ROOT, 'src', 'data', 'pokedex-index.json')
const DETAIL_DIR = join(ROOT, 'public', 'data', 'detail')

const API = 'https://pokeapi.co/api/v2'
const CONCURRENCY = 16
const FORCE = process.argv.includes('--force')

// Newest first. The most recent version with an English entry wins.
const VERSION_RANK = [
	'scarlet',
	'violet',
	'legends-arceus',
	'brilliant-diamond',
	'shining-pearl',
	'sword',
	'shield',
	'lets-go-pikachu',
	'lets-go-eevee',
	'ultra-sun',
	'ultra-moon',
	'sun',
	'moon',
	'omega-ruby',
	'alpha-sapphire',
	'x',
	'y',
	'black-2',
	'white-2',
	'black',
	'white',
	'heartgold',
	'soulsilver',
	'platinum',
	'diamond',
	'pearl',
	'firered',
	'leafgreen',
	'emerald',
	'ruby',
	'sapphire',
	'crystal',
	'gold',
	'silver',
	'yellow',
	'red',
	'blue',
]

const STAT_KEY: Record<string, keyof BaseStats> = {
	hp: 'hp',
	attack: 'atk',
	defense: 'def',
	'special-attack': 'spa',
	'special-defense': 'spd',
	speed: 'spe',
}

async function cachedJson(path: string): Promise<any> {
	const cacheFile = join(CACHE_DIR, path.replace(/\//g, '_') + '.json')
	if (existsSync(cacheFile)) {
		return JSON.parse(await readFile(cacheFile, 'utf8'))
	}
	const data = await fetchWithRetry(`${API}/${path}`)
	await writeFile(cacheFile, JSON.stringify(data))
	return data
}

async function fetchWithRetry(url: string, attempt = 0): Promise<any> {
	try {
		const res = await fetch(url)
		if (!res.ok) throw new Error(`${res.status} ${url}`)
		return await res.json()
	} catch (err) {
		if (attempt >= 4) throw err
		const wait = 500 * 2 ** attempt
		await new Promise((r) => setTimeout(r, wait))
		return fetchWithRetry(url, attempt + 1)
	}
}

function titleCase(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
}

function englishName(species: any, fallback: string): string {
	const en = species.names?.find((n: any) => n.language.name === 'en')
	return en?.name ?? titleCase(fallback)
}

function englishGenus(species: any): string {
	const en = species.genera?.find((g: any) => g.language.name === 'en')
	return (en?.genus ?? '').replace(/\s*Pok[eé]mon\s*$/i, '').trim()
}

function pickFlavor(species: any): string {
	const en = species.flavor_text_entries?.filter(
		(e: any) => e.language.name === 'en',
	)
	if (!en?.length) return ''
	let best = en[0]
	let bestRank = Infinity
	for (const entry of en) {
		const rank = VERSION_RANK.indexOf(entry.version.name)
		const r = rank === -1 ? VERSION_RANK.length : rank
		if (r < bestRank) {
			bestRank = r
			best = entry
		}
	}
	return best.flavor_text
		.replace(/[\n\f\r­]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
}

function genNumber(name: string): number {
	const roman = name.replace('generation-', '')
	const map: Record<string, number> = {
		i: 1,
		ii: 2,
		iii: 3,
		iv: 4,
		v: 5,
		vi: 6,
		vii: 7,
		viii: 8,
		ix: 9,
	}
	return map[roman] ?? 0
}

function buildStats(pokemon: any): BaseStats {
	const stats: BaseStats = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }
	for (const s of pokemon.stats) {
		const key = STAT_KEY[s.stat.name]
		if (key) stats[key] = s.base_stat
	}
	return stats
}

function buildAbilities(pokemon: any): Ability[] {
	return pokemon.abilities
		.slice()
		.sort((a: any, b: any) => a.slot - b.slot)
		.map((a: any) => ({
			name: titleCase(a.ability.name),
			isHidden: a.is_hidden,
		}))
}

async function pool<T>(items: T[], worker: (item: T) => Promise<void>) {
	let i = 0
	const runners = Array.from({ length: CONCURRENCY }, async () => {
		while (i < items.length) {
			const idx = i++
			await worker(items[idx])
			if (idx % 50 === 0) process.stdout.write(`  ${idx + 1}/${items.length}\r`)
		}
	})
	await Promise.all(runners)
}

async function main() {
	if (existsSync(INDEX_OUT) && !FORCE) {
		const existing = await readdir(DETAIL_DIR).catch(() => [])
		console.log(
			`Data present (${existing.length} detail files); skipping fetch. Pass --force to rebuild.`,
		)
		return
	}

	await mkdir(CACHE_DIR, { recursive: true })
	await mkdir(dirname(INDEX_OUT), { recursive: true })
	await mkdir(DETAIL_DIR, { recursive: true })

	const head = await cachedJson('pokemon-species?limit=1')
	const count: number = head.count
	console.log(`Live species count: ${count}. Building 1..${count}.`)

	const ids = Array.from({ length: count }, (_, i) => i + 1)
	const details: PokemonDetail[] = new Array(count)

	await pool(ids, async (id) => {
		const [species, pokemon] = await Promise.all([
			cachedJson(`pokemon-species/${id}`),
			cachedJson(`pokemon/${id}`),
		])

		const types: TypeName[] = pokemon.types
			.slice()
			.sort((a: any, b: any) => a.slot - b.slot)
			.map((t: any) => t.type.name)

		const stats = buildStats(pokemon)
		const statTotal =
			stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe

		details[id - 1] = {
			id,
			name: englishName(species, pokemon.name),
			types,
			gen: genNumber(species.generation.name),
			statTotal,
			legendary: species.is_legendary,
			genus: englishGenus(species),
			mythical: species.is_mythical,
			stats,
			height: pokemon.height / 10,
			weight: pokemon.weight / 10,
			abilities: buildAbilities(pokemon),
			flavor: pickFlavor(species),
		}
	})
	process.stdout.write('\n')

	const index: PokedexEntry[] = details.map((d) => ({
		id: d.id,
		name: d.name,
		types: d.types,
		gen: d.gen,
		statTotal: d.statTotal,
		legendary: d.legendary,
	}))

	await writeFile(INDEX_OUT, JSON.stringify(index) + '\n')
	await Promise.all(
		details.map((d) =>
			writeFile(join(DETAIL_DIR, `${d.id}.json`), JSON.stringify(d) + '\n'),
		),
	)

	console.log(
		`Wrote ${index.length} index entries and ${details.length} detail files.`,
	)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})

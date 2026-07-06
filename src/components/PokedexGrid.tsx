import { GENS } from '../data/meta'
import { POKEDEX } from '../data/pokedex'
import PokemonCard from './PokemonCard'
import './PokedexGrid.css'

const sections = GENS.map((gen) => ({
	gen,
	entries: POKEDEX.filter((p) => p.gen === gen.n),
})).filter((section) => section.entries.length > 0)

export default function PokedexGrid() {
	return (
		<>
			{sections.map(({ gen, entries }) => (
				<section
					key={gen.n}
					id={`gen-${gen.n}`}
					className="gen"
					data-gen-anchor={gen.n}
					aria-labelledby={`gen-${gen.n}-title`}
				>
					<div className="gen__header">
						<h2 id={`gen-${gen.n}-title`} className="gen__title">
							Generation {gen.roman}
						</h2>
						<span className="gen__meta">
							{gen.region} · {gen.year}
						</span>
						<span className="gen__count">{entries.length} ENTRIES</span>
					</div>
					<div className="gen__grid" role="list">
						{entries.map((entry) => (
							<PokemonCard key={entry.id} entry={entry} />
						))}
					</div>
				</section>
			))}
		</>
	)
}

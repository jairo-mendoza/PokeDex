import type { TypeName } from './meta'

export interface BaseStats {
	hp: number
	atk: number
	def: number
	spa: number
	spd: number
	spe: number
}

export interface Ability {
	name: string
	isHidden: boolean
}

export interface PokedexEntry {
	id: number
	name: string
	types: TypeName[]
	gen: number
	statTotal: number
	legendary: boolean
}

export interface PokemonDetail extends PokedexEntry {
	genus: string
	mythical: boolean
	stats: BaseStats
	height: number
	weight: number
	abilities: Ability[]
	flavor: string
}

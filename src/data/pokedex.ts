import type { PokedexEntry } from './schema'
import indexData from './pokedex-index.json'

export const POKEDEX = indexData as unknown as PokedexEntry[]
export const TOTAL = POKEDEX.length

export const art = (id: number) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export type TypeName =
	| 'grass'
	| 'poison'
	| 'fire'
	| 'water'
	| 'electric'
	| 'psychic'
	| 'flying'
	| 'ghost'
	| 'dragon'
	| 'dark'
	| 'steel'
	| 'rock'
	| 'ground'
	| 'ice'
	| 'bug'
	| 'fighting'
	| 'fairy'
	| 'normal'

export const TYPE_COLORS: Record<TypeName, string> = {
	grass: '#63925B',
	poison: '#8A6C9E',
	fire: '#C27B4B',
	water: '#5F86AC',
	electric: '#B29A45',
	psychic: '#B76F8C',
	flying: '#8B95B5',
	ghost: '#71659A',
	dragon: '#6D6FB4',
	dark: '#5F574E',
	steel: '#7E8994',
	rock: '#A18C5B',
	ground: '#B29268',
	ice: '#6FA5B2',
	bug: '#8F9C4F',
	fighting: '#A6604F',
	fairy: '#C289A4',
	normal: '#98917F',
}

export interface Generation {
	n: number
	roman: string
	region: string
	year: number
}

export const GENS: Generation[] = [
	{ n: 1, roman: 'I', region: 'Kanto', year: 1996 },
	{ n: 2, roman: 'II', region: 'Johto', year: 1999 },
	{ n: 3, roman: 'III', region: 'Hoenn', year: 2002 },
	{ n: 4, roman: 'IV', region: 'Sinnoh', year: 2006 },
	{ n: 5, roman: 'V', region: 'Unova', year: 2010 },
	{ n: 6, roman: 'VI', region: 'Kalos', year: 2013 },
	{ n: 7, roman: 'VII', region: 'Alola', year: 2016 },
	{ n: 8, roman: 'VIII', region: 'Galar', year: 2019 },
	{ n: 9, roman: 'IX', region: 'Paldea', year: 2022 },
]

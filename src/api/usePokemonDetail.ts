import { useQuery } from '@tanstack/react-query'
import type { PokemonDetail } from '../data/schema'

async function fetchDetail(id: number): Promise<PokemonDetail> {
	const res = await fetch(`${import.meta.env.BASE_URL}data/detail/${id}.json`)
	if (!res.ok) throw new Error(`Failed to load Pokémon #${id}`)
	return (await res.json()) as PokemonDetail
}

export function usePokemonDetail(id: number | null) {
	return useQuery({
		queryKey: ['pokemon-detail', id],
		queryFn: () => fetchDetail(id as number),
		enabled: id != null,
	})
}

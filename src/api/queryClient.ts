import { QueryClient } from '@tanstack/react-query'

// Pokémon data is static and pre-built, so entries never go stale or evict.
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			gcTime: Infinity,
			retry: 2,
			refetchOnWindowFocus: false,
		},
	},
})

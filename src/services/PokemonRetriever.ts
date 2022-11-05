import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import axios from "axios";

// Collects data from the PokeAPI, individual pokemon are
// stored as an Object in a list
const RetrievePokemon = (): Map<string, Pokemon> => {
    const [pokemon, setPokemon] = useState<Map<string, Pokemon>>(new Map());

    const getSpecificPokemonData = async (pokeId: number) => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
        );
        return response.data;
    };

    const getPokemon = async () => {
        let pokemonDatabase: Map<string, Pokemon> = new Map();
        for (let i = 1; i <= 151; i++) {
            const curPoke: Pokemon = await getSpecificPokemonData(i);
            pokemonDatabase.set(curPoke.name, curPoke); // pokemonDatabase.set(key, value)
        }

        setPokemon(pokemonDatabase);
    };

    // Runs as soon as the page is loaded
    useEffect(() => {
        getPokemon();
    }, []);

    return pokemon;
};

export default RetrievePokemon;

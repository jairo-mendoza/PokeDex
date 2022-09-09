import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import axios from "axios";

// Collects data from the PokeAPI, individual pokemon are
// stored as an Object in a list
const RetrievePokemon = (): Pokemon[] => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    const getSpecificPokemonData = async (pokeId: number) => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
        );
        return response.data;
    };

    const getPokemon = async () => {
        let pokemonArr: Pokemon[] = [];
        for (let i = 1; i <= 151; i++) {
            pokemonArr.push(await getSpecificPokemonData(i));
        }

        setPokemon(pokemonArr);
    };

    // Runs as soon as the page is loaded
    useEffect(() => {
        getPokemon();
    }, []);

    return pokemon;
};

export default RetrievePokemon;

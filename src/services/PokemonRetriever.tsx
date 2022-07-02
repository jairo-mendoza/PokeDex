import React, { useEffect, useState } from "react";
import axios from "axios";

// Collects data from the PokeAPI, individual pokemon are
// stored as an Object in a list
const RetrievePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemon = async () => {
    let pokemonArr: any = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArr.push(await getSpecificPokemonData(i));
    }

    setPokemon(pokemonArr);
    setIsLoading(false);
  };

  const getSpecificPokemonData = async (pokeId: number) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
    );
    return response.data;
  };

  // Runs as soon as the page is loaded
  useEffect(() => {
    getPokemon();
  }, []);

  return pokemon;
};

export default RetrievePokemon;

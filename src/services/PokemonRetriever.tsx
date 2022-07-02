import { useEffect, useState } from "react";
import axios from "axios";

// Accept a general url that holds json and how the json data should look like
function RetrievePokemon() {
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
}

export default RetrievePokemon;

import React from "react";
import RetrievePokemon from "../services/PokemonRetriever";

function PokemonPropagator() {
  const pokeList = RetrievePokemon();

  return <div></div>;
}

export default PokemonPropagator;

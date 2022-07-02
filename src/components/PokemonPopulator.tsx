import React, { useState } from "react";
import RetrievePokemon from "../services/PokemonRetriever";

function PokemonPopulator() {
  const pokeData = RetrievePokemon();
  console.log(pokeData);
  return (
    <div>
      <p>E</p>
    </div>
  );
}

export default PokemonPopulator;

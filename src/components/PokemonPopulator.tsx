import React, { useState } from "react";
import RetrievePokemon from "../services/PokemonRetriever";

function PokemonPopulator() {
  const pokeData = RetrievePokemon();
  console.log(pokeData);
  return (
    <div>
      {pokeData.map((currentPokemon, index) => {
        return <p key={index}>{currentPokemon["name"]}</p>;
      })}
    </div>
  );
}

export default PokemonPopulator;

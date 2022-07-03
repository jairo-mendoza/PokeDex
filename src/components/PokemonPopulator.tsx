import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import RetrievePokemon from "../services/PokemonRetriever";

function PokemonPopulator() {
  const pokeData = RetrievePokemon();
  console.log(pokeData);
  return (
    <div>
      <Row>
        {pokeData.map((currentPokemon, index) => {
          return (
            <Col
              key={currentPokemon["id"]}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={2}
            >
              <img
                src={currentPokemon["sprites"]["front_default"]}
                alt={currentPokemon["name"]}
              />
              <p>{currentPokemon["name"]}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PokemonPopulator;

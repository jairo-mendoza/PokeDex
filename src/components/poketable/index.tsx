import styled from "styled-components";

import { Row } from "react-bootstrap";

import { Pokemon } from "../../services/Pokemon";
import RetrievePokemon from "../../services/PokemonRetriever";
import TableControlBar from "./controls";
import PokeCell from "./cells";
import { useEffect, useState } from "react";
import PokeballSpinner from "./PokeballSpinner";

// Styling
const StyledPokeTable = styled("div")`
    margin: 10px;
`;

function PokeTable() {
    const pokeData: Pokemon[] = RetrievePokemon();
    // TODO: Update to be more dynamic
    return (
        <StyledPokeTable>
            {pokeData.length === 151 ? <TableControlBar /> : null}
            {pokeData.length === 151 ? null : <PokeballSpinner />}
            <Row>
                {pokeData.map((currentPoke) => {
                    return (
                        <PokeCell
                            key={currentPoke.id}
                            id={currentPoke.id}
                            sprite={currentPoke.sprites.front_default}
                            name={currentPoke.name}
                            type={currentPoke.types[0].type.name}
                        />
                    );
                })}
            </Row>
        </StyledPokeTable>
    );
}

export default PokeTable;

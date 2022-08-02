import { createContext } from "react";
import styled from "styled-components";

import { Row } from "react-bootstrap";

import RetrievePokemon from "../../services/PokemonRetriever";
import TableControlBar from "./controls";
import PokeCell from "./cells";

// Styling
const StyledPokeTable = styled("div")`
    margin-left: 10px;
    margin-right: 10px;
`;

//const context = createContext();

function PokeTable() {
    const pokeData = RetrievePokemon();
    return (
        <StyledPokeTable>
            <TableControlBar />
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

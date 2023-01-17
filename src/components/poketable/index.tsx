import styled from "styled-components";

import { Row } from "react-bootstrap";

import { Pokemon } from "../../services/Pokemon";
import RetrievePokemon from "../../services/PokemonRetriever";
import TableControlBar from "./controls";
import PokeCell from "./cells";
import PokeballSpinner from "./PokeballSpinner";

// Styling
const StyledPokeTable = styled("div")`
    margin: 10px;
`;

function PokeTable() {
    const pokeData: Map<string, Pokemon> = RetrievePokemon();
    // TODO: Update to be more dynamic
    // We are now using a map, I decided on this change for faster access compared to using an Array
    // we still need to use an array to display the pokemon in a table
    return (
        <StyledPokeTable>
            {pokeData.size === 151 ? <TableControlBar /> : null}
            {pokeData.size === 151 ? null : <PokeballSpinner />}
            <Row>
                {Array.from(pokeData.values()).map((currentPoke) => {
                    return (
                        <PokeCell key={currentPoke.id} pokemon={currentPoke} />
                    );
                })}
            </Row>
        </StyledPokeTable>
    );
}

export default PokeTable;

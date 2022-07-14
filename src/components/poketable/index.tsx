import { Row } from "react-bootstrap";

import RetrievePokemon from "../../services/PokemonRetriever";
import TableControlBar from "./controls";
import PokeCell from "./cells";

function PokeTable() {
  const pokeData = RetrievePokemon();
  return (
    <div>
      <TableControlBar />
      <Row>
        {pokeData.map((currentPoke, index) => {
          return (
            <PokeCell
              key={currentPoke["id"]}
              id={currentPoke["id"]}
              sprite={currentPoke["sprites"]["front_default"]}
              name={currentPoke["name"]}
              type={currentPoke["types"][0]["type"]["name"]}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default PokeTable;

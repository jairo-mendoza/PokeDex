import { Row } from "react-bootstrap";

import RetrievePokemon from "../../services/PokemonRetriever";
import PokeCell from "./cells";

function PokeTable() {
  const pokeData = RetrievePokemon();
  console.log(pokeData);
  return (
    <div>
      <Row>
        {pokeData.map((currentPoke, index) => {
          return (
            <PokeCell
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

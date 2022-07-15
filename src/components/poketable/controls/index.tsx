import PokeTable from "../";

const TableControlBar = () => {
  const pokeCards = document.querySelectorAll(".card");
  return (
    <div>
      Displaying {pokeCards.length} of {pokeCards.length} Pokemon
    </div>
  );
};

export default TableControlBar;

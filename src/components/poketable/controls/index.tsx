import React from "react";
import PokeTable from "../";
import PokeSearch from "./PokeSearch";

const TableControlBar = () => {
    const pokeCards = document.querySelectorAll(".card");
    return (
        <React.Fragment>
            Displaying {pokeCards.length} of {pokeCards.length} Pokemon
        </React.Fragment>
    );
};

export default TableControlBar;

import React from "react";

const TableControlBar = () => {
    const pokeCards = document.querySelectorAll(".card");
    return (
        <React.Fragment>
            Displaying {pokeCards.length} of {pokeCards.length} Pokemon
        </React.Fragment>
    );
};

export default TableControlBar;

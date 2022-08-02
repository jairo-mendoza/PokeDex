import styled from "styled-components";

const SearchBar = styled("input")`
    float: right;
    color: red;
`;

const PokeSearch = () => {
    return <SearchBar aria-label="hello"></SearchBar>;
};

export default PokeSearch;

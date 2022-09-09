import styled, { keyframes } from "styled-components";

// Used styled-components docs

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Pokeball = styled.img`
    height: 200px;
    animation: ${rotate} 2s linear infinite;
`;

const PokeballSpinner = () => {
    return (
        <SpinnerContainer>
            <Pokeball src="pokeballSpinner.png"></Pokeball>
            <p>Please wait while the Pokemon load in :)</p>
        </SpinnerContainer>
    );
};

export default PokeballSpinner;

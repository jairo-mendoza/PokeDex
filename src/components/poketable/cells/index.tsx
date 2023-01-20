import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import { color, icon } from "../../../colors/pokeTypes";
import PokeModal from "../../pokedata/modal";
import { Pokemon } from "../../../services/Pokemon";

// Styling
const PokeCard = styled(Card)`
    margin-bottom: 1em;
    background-color: ${(props) => props.background || "white"};
    cursor: pointer;
`;

const Sprite = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

const Text = styled.p`
    color: white;
    text-align: center;
    text-transform: capitalize;
`;

const TypeIcon = styled.img`
    max-width: 40px;
    max-height: 40px;
`;

const PokeCell = (props: any) => {
    const [isClicked, setIsClicked] = useState(false);
    const curPokemon: Pokemon = props.pokemon;

    // NOTE: Seems like onClick property has to hold a function like this, otherwise it automatically runs code on all renders even
    // without a user's click (will look more into this)
    const openPokeData = () => {
        setIsClicked(true);
    };

    return (
        <>
            <Col key={curPokemon.id} xs={6} sm={4} md={4} lg={3} xl={2} xxl={2}>
                <PokeCard
                    background={color[curPokemon.types[0].type.name]}
                    onClick={openPokeData}
                >
                    <Sprite
                        src={curPokemon.sprites.front_default}
                        alt={curPokemon.name}
                    />
                    <Text>{curPokemon.name}</Text>
                    {curPokemon.types.map((curType) => {
                        return <TypeIcon src={icon[curType.type.name]} />;
                    })}
                </PokeCard>
            </Col>

            {isClicked && (
                <PokeModal
                    show={isClicked}
                    pokemon={curPokemon}
                    onHide={() => setIsClicked(false)}
                />
            )}
        </>
    );
};

// PokeModal should only render when a pokecell is clicked

PokeCell.propTypes = {
    id: PropTypes.number,
    pokemon: PropTypes.object,
};

export default PokeCell;

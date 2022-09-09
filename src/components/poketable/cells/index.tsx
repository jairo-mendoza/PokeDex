import React from "react";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

import { color } from "../../../colors/pokeTypes";

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

const PokeCell = (props: any) => {
    const openPokeData = () => {
        console.log(`Opening data about ${props.name}...`);
    };

    return (
        <Col key={props.id} xs={6} sm={4} md={4} lg={3} xl={2} xxl={2}>
            <PokeCard background={color[props.type]} onClick={openPokeData}>
                <Sprite src={props.sprite} alt={props.name} />
                <Text>{props.name}</Text>
                <Text>{props.type}</Text>
            </PokeCard>
        </Col>
    );
};

PokeCell.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    sprite: PropTypes.string,
    type: PropTypes.string,
};

export default PokeCell;

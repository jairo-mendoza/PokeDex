import React from "react";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";
import { color } from "../../colors/pokeTypes";

const PokeCell = (props: any) => {
  // Styling
  const PokeCard = styled(Card)`
    margin-bottom: 1em;
    background-color: ${color[props.type]};
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
  `;

  return (
    <Col key={props.id} xs={6} sm={4} md={4} lg={3} xl={2} xxl={2}>
      <PokeCard>
        <Sprite src={props.sprite} alt={props.name} />
        <Text>{props.name}</Text>
        <Text>{props.type}</Text>
      </PokeCard>
    </Col>
  );
};

export default PokeCell;

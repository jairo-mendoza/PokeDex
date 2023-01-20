import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { color } from "../../../colors/pokeTypes";
import { Pokemon } from "../../../services/Pokemon";

/*
 * Sprites are from Gen V, black and white
 *
 */
// This is to make the animated sprites have a fixed area they take up,
// smaller sprites are smaller sizes
const AnimatedSpriteContainer = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.background || "white"};
    min-height: 150px;
    max-width: 150px;
`;

const AnimatedSprite = styled.img`
    display: absolute;
    left: 50%;
    top: 50%;
`;

const PokeModal = (props: any) => {
    const curPokemon: Pokemon = props.pokemon;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {curPokemon.name} #{curPokemon.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AnimatedSpriteContainer
                    background={color[curPokemon.types[0].type.name]}
                >
                    <AnimatedSprite
                        src={
                            curPokemon.sprites.versions["generation-v"][
                                "black-white"
                            ].animated.front_default
                        }
                        alt={curPokemon.name}
                    />
                </AnimatedSpriteContainer>
                {curPokemon.types.map((curType) => {
                    return <p key={curType.slot}>{curType.type.name}</p>;
                })}
            </Modal.Body>
        </Modal>
    );
};

export default PokeModal;

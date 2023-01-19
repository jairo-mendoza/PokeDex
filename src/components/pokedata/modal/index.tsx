import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { Pokemon } from "../../../services/Pokemon";

/*
 * Sprites are from Gen V, black and white
 *
 */
const Sprite = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
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
                <Sprite
                    src={
                        curPokemon.sprites.versions["generation-v"][
                            "black-white"
                        ].animated.front_default
                    }
                    alt={curPokemon.name}
                />
                {curPokemon.types.map((curType) => {
                    return <p key={curType.slot}>{curType.type.name}</p>;
                })}
            </Modal.Body>
        </Modal>
    );
};

export default PokeModal;

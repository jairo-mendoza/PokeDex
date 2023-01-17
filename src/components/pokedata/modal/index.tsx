import Modal from "react-bootstrap/Modal";
import { Pokemon } from "../../../services/Pokemon";

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
                    {curPokemon.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default PokeModal;

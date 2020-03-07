import React from "react";
import Modal from "react-bootstrap/Modal";
import Song from "../Song";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";



const ModalButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);


  const showModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <><h6>Click to add songs before saving<button className=" btn btn-success float-right" onClick={showModal}>Add Songs</button></h6>

      <Modal size="lg" show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Add Songs</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center"><Song></Song></Modal.Body>
        <Modal.Footer>
          <button className=" btn btn-success" onClick={hideModal}>Cancel</button>
          <button className="save btn btn-success">Save</button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default ModalButton;
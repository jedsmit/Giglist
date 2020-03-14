import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import "./modalButton.css";



function ModalButton(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Modal className="modal-style"
        {...props}
        size="x-lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Songs To Your Arsenal
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Song Title</Form.Label>
              <Form.Control type="text" placeholer="Song Title" name="song-title"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Artist Name</Form.Label>
              <Form.Control type="text" placeholer="Artist Name" name="artist-name"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" placeholer="Jazz" name="genre-name"></Form.Control>
            </Form.Group>
            <Row>
              <Col xs={3}>
                <Form.Group >
                  <Form.Label>Key</Form.Label>
                  <Form.Control as="select" size="sm" custom>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>f</option>
                    <option>G</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col xs={3}><Form.Group>
                <Form.Label className="radio"> &#9839;<InputGroup.Radio name="radio" value="sharp" aria-label="Radio button for following text input" />
                </Form.Label>


                <Form.Label className="radio">
                  &#9837;<InputGroup.Radio name="radio" value="flat" aria-label="Radio button for following text input" /></Form.Label>
              </Form.Group>
              </Col>

              <Col xs={3}>
                <Form.Group >
                  <Form.Label>Maj/min</Form.Label>
                  <Form.Control as="select" size="sm" custom>
                    <option>Major</option>
                    <option>Minor</option>

                  </Form.Control>
                </Form.Group>
              </Col>

              <Col xs={3}>
                <Form.Group>
                  <Form.Label>Bpm</Form.Label>
                  <Form.Control type="text" placeholer="120" name="bpm"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}



export default ModalButton;
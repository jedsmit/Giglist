import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import "./modalButton.css";
import API from "../../utils/API"



function ModalButton(props) {

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [bpm, setBpm] = useState(0);
  const [majMin, setMajMin] = useState("Major")
  const [sharpOrFlat, setSharpOrFlat] = useState("");
  const [key, setKey] = useState("A");
  const [keySig, setKeySig] = useState("");

  useEffect(() => {
    setKeySig(key + sharpOrFlat + majMin)
    console.log(keySig)
  })

  // useEffect(() => {
  //   console.log(bpm);
  // })


  //closes modal
  const handleClose = () => setShow(false);



  // save song to database when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    //sends to backend
    API.addSong(
      {
        title: title,
        artist: artist,
        genre: genre,
        bpm: bpm,
        keySig: keySig
      }
    ).then(res => {
      handleClose();
    })
      .catch(err => console.log(err))
  };



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
            {/* song title */}
            <Form.Group>
              <Form.Label>Song Title</Form.Label>
              <Form.Control type="text" placeholer="Song Title" name="song-title" onChange={e => {
                setTitle(e.target.value)
              }}></Form.Control>
            </Form.Group>
            {/* artist name */}
            <Form.Group>
              <Form.Label>Artist Name</Form.Label>
              <Form.Control type="text" placeholer="Artist Name" name="artist-name" onChange={e => {
                setArtist(e.target.value)
              }}></Form.Control>
            </Form.Group>
            {/* genre */}
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" placeholer="Jazz" name="genre-name" onChange={e => {
                setGenre(e.target.value)
              }}></Form.Control>
            </Form.Group>
            <Row>
              <Col xs={3}>
                {/* song key */}
                <Form.Group >
                  <Form.Label>Key</Form.Label>
                  <Form.Control as="select" size="sm" onChange={e => {
                    setKey(e.target.value)
                  }} custom>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              {/* radio buttons for sharp or flat symbol */}
              <Col xs={3}><Form.Group>
                <Form.Group >
                  <Form.Label>&#9838;/&#9839;/&#9837;</Form.Label>
                  <Form.Control as="select" size="sm" onChange={e => {
                    setSharpOrFlat(e.target.value)
                  }} custom>
                    <option value=" ">&#9838;</option>
                    <option>&#9839;</option>
                    <option>&#9837;</option>
                  </Form.Control>
                </Form.Group>
                {/* <Form.Label className="radio"> &#9839;<InputGroup.Radio name="radio" value="sharp" aria-label="Radio button for following text input" />
                </Form.Label>


                <Form.Label className="radio">
                  &#9837;<InputGroup.Radio name="radio" value="flat" aria-label="Radio button for following text input" /></Form.Label> */}
              </Form.Group>
              </Col>

              <Col xs={3}>
                {/* option for maj/min key */}
                <Form.Group >
                  <Form.Label>Maj/min</Form.Label>
                  <Form.Control as="select" size="sm" onChange={e => {
                    setMajMin(e.target.value)
                  }} custom>
                    <option>major</option>
                    <option>minor</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col xs={3}>
                {/* bpm */}
                <Form.Group>
                  <Form.Label>Bpm</Form.Label>
                  <Form.Control type="text" placeholer="120" name="bpm" onChange={e => {
                    setBpm(parseInt(e.target.value))
                  }}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}



export default ModalButton;
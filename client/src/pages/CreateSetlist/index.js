import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import "./createSetlist.css"
import ModalButton from "../../components/ModalButton";
import API from "../../utils/API";

function CreateSetlist(props) {
  //states
  // const [songs, setSongs] = useState([{}]);

  const [name, setName] = useState("");

  const [gigType, setGigType] = useState("");
  //effects
  useEffect(() => {
    console.log('it works');
  })
  //grab all songs from database
  // const getSongs = () => {
  //   API.getSongs()
  //     .then(response => setSongs(response.data))
  // };
  // save setlist to database when form is submitted
  const handleSubmit = (e) => {
    saveSetlist(e.target);

  }

  const handleInputChange = (e) => {
    e.preventDefault();
    setName({
      [e.target.name]: e.target.value
    })
  }

  const saveSetlist = (data) => {
    let name = data.name
    let gigtype = data.gigtype
    let songs = data.songs

    API.addSetlist({
      name: name,
      gigttype: gigtype,
      songs: songs

    })
      .catch(err => console.log(err))

  }


  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid"><h1>Create a new Setlist!</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Card>

            <Form onSubmit={handleSubmit} className="form">
              <Form.Group controlId="form-setlist-name">
                <Form.Label>Setlist Name</Form.Label>
                <Form.Control type="text" placeholder="Enter List Name" name="name" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="form-gig-type">
                <Form.Label>Gig Type</Form.Label>
                <Form.Control type="text" placeholder="Wedding" name="gigtype" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group>
                <ModalButton key={"modal"} />

              </Form.Group>

              <Form.Group>
                <Form.Label>Songs</Form.Label>
                <Card>

                </Card>
              </Form.Group>

              <Form.Group>
                <Link to="/">
                  <Button onClick={saveSetlist} variant="success float-right" type="submit">
                    Save List
                 </Button>
                </Link>
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </>
  )
};

export default CreateSetlist;
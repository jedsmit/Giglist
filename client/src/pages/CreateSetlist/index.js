import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import "./style.css"
import ModalButton from "../../components/ModalButton";
import Song from "../../components/Song"
import API from "../../utils/API"

class CreateSetlist extends Component {

  state = {
    songs: [{}],
    name: "",
    gigtype: ""
  };

  //grab all songs from database
  getSongs = () => {
    API.getSongs()
      .then(response => this.setState({ songs: response.data }))
  };
  // save setlist to database when form is submitted
  handleSubmit = (e) => {
    this.saveSetlist(e.target);

  }
  //console.log current state
  printState = () => {
    console.log(this.state)
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    }, this.printState())
  }

  // saveSetlist = (data) => {
  //   let name = data.name
  //   let gigtype = data.gigtype
  //   let songs = data.songs

  //   API.addSetlist({
  //     name: name,
  //     gigttype: gigtype,
  //     songs: songs

  //   })
  //     .catch(err => console.log(err))

  // }

  render() {
    const name = this.state.name

    return (
      <>
        <div className="jumbotron jumbotron-fluid"><h1>Create a new Setlist!</h1></div>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <Card>

              <Form onSubmit={this.handleSubmit} className="form">
                <Form.Group controlId="form-setlist-name">
                  <Form.Label>Setlist Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter List Name" name="name" onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group controlId="form-gig-type">
                  <Form.Label>Gig Type</Form.Label>
                  <Form.Control type="text" placeholder="Wedding" name="gigtype" onChange={this.handleInputChange} />
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
                  <Link to="/"><Button onClick={this.saveSetlist} variant="success float-right" type="submit">
                    Save List
  </Button></Link></Form.Group>
              </Form>
            </Card>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </>
    )
  }
};

export default CreateSetlist;
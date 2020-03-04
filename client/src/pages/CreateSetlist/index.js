import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import "./style.css"
import ModalButton from "../../components/ModalButton";

function CreateSetlist() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid"><h1>Create a new Setlist!</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Card>
            <Form className="form">
              <Form.Group controlId="form-setlist-name">
                <Form.Label>Setlist Name</Form.Label>
                <Form.Control type="text" placeholder="Enter List Name" />
              </Form.Group>

              <Form.Group controlId="form-gig-type">
                <Form.Label>Gig Type</Form.Label>
                <Form.Control type="text" placeholder="Wedding" />
              </Form.Group>

              <Form.Group>
                <ModalButton></ModalButton>
              </Form.Group>

              <Form.Group>
                <Form.Label>Songs</Form.Label>
                <Card><h1>This will be filled all of the songs dynamicly once picked from modal</h1></Card>
              </Form.Group>

              <Form.Group>
                <Link to="/"><Button variant="success float-right" type="submit">
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

export default CreateSetlist;
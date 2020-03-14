import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./title.css";
function Title() {

  return (
    <>
      <Row>
        <Col></Col>
        <div><stong><h1>Welcome to Setlist!</h1></stong></div>
        <Col></Col>
      </Row>
      <br>
      </br>
      <br>
      </br>
      <Row>
        <Col><h3 className="name">Insert Name Here</h3></Col>
      </Row>
    </>
  )
}

export default Title;
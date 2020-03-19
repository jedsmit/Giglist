import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./title.css";
function Title() {

  return (
    <>
      <Row>
        <Col></Col>
        <div><strong><h1>Welcome to Giglist!</h1></strong></div>
        <Col></Col>
      </Row>
      <br>
      </br>
      <br>
      </br>
      <Row>
        <Col><h3 id="name" className="name">Insert Name Here</h3></Col>
      </Row>
    </>
  )
}

export default Title;
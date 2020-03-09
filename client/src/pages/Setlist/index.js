import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import "./style.css"

function Setlist() {

  //create an html element that is going to live somewhere on page but in the background so it doesn't matter
  var el = document.createElement('html');

  //assign that element the text of whatever icon you want
  el.innerHTML = "F&#9839; Major";

  return (
    <>
      <div className="jumbotron jumbotron-fluid"><h1>Setlist Name</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Card className="setlist">
            <Card.Header><h4>Setlist Name</h4></Card.Header>
            <Card.Body>
              <Row>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Song Name</th>
                      <th>Key</th>
                      <th>BPM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td><Badge className="key-badge" pill variant="info"><h6>B&#9837;</h6></Badge></td>
                      <td><Badge className="bpm-flash" pill variant="info"><h6>120</h6></Badge></td>

                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td><Badge className="key-badge" pill variant="info"><h6>{el.textContent}</h6></Badge></td>
                      <td><Badge className="bpm-flash2" pill variant="info"><h6>90</h6></Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Card.Body>
          </Card></Col>
        <Col xs={3}></Col>
      </Row>

    </>
  )
}

export default Setlist;
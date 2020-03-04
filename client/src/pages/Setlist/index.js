import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./style.css"

function Setlist() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid"><h1>Setlist Name</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}><Card>
          <Card.Header><h4>Setlist Name</h4></Card.Header>
          <Card.Body>
            <Row>
              <Table striped bordered hover>
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
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
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
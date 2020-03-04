import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css"
import { Link } from "react-router-dom";
function UserLists() {
  return (
    <> <Container>
      <Card>
        <Card.Header><div className="row"><div className="col-sm-9"><h4>Your Setlists</h4></div><div className="col-sm-3"><Link to="/create-setlist"><button type="button" className="btn btn-success float-right" >Create New</button></Link></div></div></Card.Header>
        <Card.Body>

          <Card.Text>
            <ul>
              <li>My (Jazz Standards Setlist)</li>
              <li>My (Jazz Fusion Setlist)</li>
              <li>My (Funk Setlist)</li>
              <li>My (Rock Setlist)</li>
              <li>My (Prog Setlist)</li>
              <li>My (Bluegrass Setlist)</li>
              <li>My (Random #1 Setlist)</li>
              <li>My (Random #2 Setlist)</li>
              <li>My (Random #3 Setlist)</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

    </Container>
    </>
  )
}

export default UserLists;
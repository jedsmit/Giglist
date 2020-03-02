import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css"
function UserLists() {
  return (
    <> <Container>
      <Card>
        <Card.Header><h4>Your Setlists</h4><span><button type="button" className="btn btn-success float-right" href="/create-setlist">Create New</button></span></Card.Header>
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
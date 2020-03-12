import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./style.css"
import { Link } from "react-router-dom";
import Setlist from "../Setlist";
import API from "../../utils/API"



function UserLists() {

  const [setlists, setSetlists] = useState([{}])

  function getSetlists() {
    API.getSetlists()
      .then(response => setSetlists(response.data))
  };


  return (
    <Container>
      <Card>
        <Card.Header><div className="row"><div className="col-sm-9"><h4>Your Setlists</h4></div><div className="col-sm-3"><Link to="/create-setlist"><button type="button" className="btn btn-success float-right" >Create New</button></Link></div></div></Card.Header>
        <Card.Body>

          <ul>
            {getSetlists()}
            {
              setlists.map((setlist) => {
                return <Setlist
                  key={setlist._id}
                  name={setlist.name}
                  gigtype={setlist.gigtype}
                />
              })
            }
          </ul>

        </Card.Body>
      </Card>

    </Container>
  )
}


export default UserLists;
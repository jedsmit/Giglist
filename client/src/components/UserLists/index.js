import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./userLists.css"
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
    <>
      <Card border="warning">
        <Card.Header><div className="row"><div className="col-sm-9"><h4>Your Giglists</h4></div><div className="col-sm-3"><Link to="/create-setlist">
          {/* button to create new setlist */}
          <button type="button" className="btn btn-warning float-right" >Create New</button></Link></div></div></Card.Header>
        <Card.Body>

          {/* renders users list of setlists */}
          <ul className="list">
            {getSetlists()}
            {
              setlists.map((setlist, index) => {
                return <li key={index} className="list-group-item">
                  <Setlist
                    name={setlist.name}
                    gigtype={setlist.gigtype}
                  />
                </li>
              })
            }
          </ul>

        </Card.Body>
      </Card>
    </>

  )
}


export default UserLists;
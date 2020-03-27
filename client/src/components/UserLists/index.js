import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import "./userLists.css"
import { Link } from "react-router-dom";
import SetlistComponent from "../SetlistComponent";
import API from "../../utils/API"
import { SetlistContext } from "../../contexts/setlistContext/SetlistContext"



function UserLists() {
  const [setlistId, setSetlistId] = useContext(SetlistContext);
  const [setlistSongs, setSetlistSongs] = useContext(SetlistContext);
  const [setlists, setSetlists] = useState([{}]);
  // const [id, setId] = useState("");


  useEffect(() => {
    getSetlists();
  }, [])

  function updateSetlistId(id) {
    console.log(id);
    setSetlistId(id)
    // updateSetlistSongs(id)
    console.log("usercomponent: " + setlistId)
  }

  // function updateSetlistSongs(id) {
  //   API.getSetlist(id)
  //     .then(res => {
  //       setSetlistSongs(res.data.songs)
  //     })
  //     .catch(err => console.log(err))
  // }




  function getSetlists() {
    API.getSetlists()
      .then(response => setSetlists(response.data))
      .catch(err => console.log(err))
  };

  // function getOneSetlist(id) {
  //   API.getSetlist(id)
  //     .then(res => {
  //       console.log(res.songs)
  //       setChosenList(res.songs)

  //     }).catch(err => console.log(err))
  // }

  return (
    <>
      <Card border="warning">
        <Card.Header><div className="row"><div className="col-sm-9"><h4>Your Giglists</h4></div><div className="col-sm-3"><Link to="/create-setlist">
          {/* button to create new setlist */}
          <button type="button" className="btn btn-warning float-right" >Create New</button></Link></div></div></Card.Header>
        <Card.Body>

          {/* renders users list of setlists */}
          <ul className="list">
            {
              setlists.map((setlist, index) => {
                return <li key={index} className="list-group-item">

                  <SetlistComponent
                    name={setlist.name}
                    gigtype={setlist.gigtype}
                    id={setlist._id}
                    to={"/setlistPage"}
                    onClick={e => {
                      e.stopPropagation();
                      updateSetlistId(setlist._id)
                    }}
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
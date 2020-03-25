import React, { useEffect, useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Stars from "../../components/Rating";
import Navbar from "../../components/Navbar";
import "./setlist.css";
// import UserList from "../../components/UserLists";
import API from "../../utils/API";
import { SetlistContext } from "../../contexts/setlistContext/SetlistContext";


function SetlistPage(props) {
  const [setlistId, setSetlistId] = useContext(SetlistContext);
  const [blinkingText, setBlinkingText] = useState(false);
  const [songs, setSongs] = useState([]);

  // const [listName, setListName] = useState(props.name);
  // const [gigtype, setGigtype] = useState(props.gigtype);
  // const [chosenList, setChosenList] = useState(props.chosenList)


  useEffect(() => {
    getOneSetlist(setlistId);
  }, [])

  function getOneSetlist(id) {
    console.log("setlistpage: " + id)
    API.getSetlist(id)
      .then(res => {
        console.log(res.body)


      }).catch(err => console.log(err))
  }

  function renderSongs(songs) {
    const newSongs = songs.map((song) => {
      return {
        ...song,
        blinkingText: false,
        ms: calcBpmToMs(song.bpm)
      }
    })
    // console.log(songs)
    setSongs(newSongs);

  }

  const handleBlinkClick = (selectedSong) => {

    const newSongs = songs.map((song) => {
      if (song._id === selectedSong._id) {
        return { ...song, blinkingText: !song.blinkingText }
      } else {
        return song
      }
    })
    setSongs(newSongs)
  }




  const calcBpmToMs = (bpm) => {
    const result = 60000 / bpm + "ms"
    console.log(result);
    return result
  }

  return (



    <>
      <Navbar />

      <div><h1 className="setlist-header">Your Customized Setlist w/clickable BPM</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Card border="warning" className="setlist">
            <Card.Header><Row><Col><h4>listname</h4></Col><Stars className="justify-content-end"></Stars></Row></Card.Header>
            <Card.Body>
              <Row>
                <Table >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Song Name</th>
                      <th>Key</th>
                      <th>BPM</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      songs.map((song, i) => (
                        <tr key={song._id}>
                          <td>{i + 1}</td>
                          <td>{song.title}</td>
                          <td><Badge className="key-badge" pill variant="warning" ><h6>{song.keySig}</h6></Badge></td>
                          <td><Badge style={song.blinkingText ? {
                            animationName: "blinkingText",
                            animationDuration: song.ms,
                            animationIterationCount: "infinite"
                          } : {}} pill variant="warning" key={Badge} onClick={() => handleBlinkClick(song)}><h6>{song.bpm}</h6></Badge></td>
                        </tr>
                      ))
                    }
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

export default SetlistPage;
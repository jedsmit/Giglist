import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Navbar from "../../components/Navbar";
import "./setlist.css"
import API from "../../utils/API";


function Setlist() {
  const [blinkingText, setBlinkingText] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  //create an html element that is going to live somewhere on page but in the background so it doesn't matter
  var el = document.createElement('html');

  //assign that element the text of whatever icon you want
  el.innerHTML = "F &#9839; Major";

  const handleBlinkClick = (selectedSong) => {

    const newSongs = songs.map((song) => {
      if (song._id === selectedSong._id) {
        return { ...song, blinkingText: !song.blinkingText }
      } else {
        return song
      }
    }
    )
    setSongs(newSongs)
  }


  const getSongs = () => {
    API.getSongs()
      .then(response => {
        // console.log("API")
        let songs = response.data;
        const newSongs = songs.map((song) => {
          return {
            ...song,
            blinkingText: false,
            ms: calcBpmToMs(song.bpm)
          }
        }
        )
        // console.log(songs)
        setSongs(newSongs)
      });
  }

  const calcBpmToMs = (bpm) => {
    const result = 60000 / bpm + "ms"
    console.log(result);
    return result
  }

  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid"><h1>Setlist Name</h1></div>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Card className="setlist">
            <Card.Header><h4>Setlist Name</h4></Card.Header>
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
                          <td><Badge className="key-badge" pill variant="info" ><h6>{song.keySig}</h6></Badge></td>
                          <td><Badge style={song.blinkingText ? {

                            animationName: "blinkingText",
                            animationDuration: song.ms,
                            animationIterationCount: "infinite"
                          } : {}} pill variant="info" key={Badge} onClick={() => handleBlinkClick(song)}><h6>{song.bpm}</h6></Badge></td>
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

export default Setlist;
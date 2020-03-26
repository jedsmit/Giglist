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
  const [setlistSongs, setSetlistSongs] = useContext(SetlistContext);
  const [blinkingText, setBlinkingText] = useState(false);
  const [songs, setSongs] = useState([]);
  const [title, setTitle] = useState("")
  const [name, setName] = useState("");
  const [keySig, setKeySig] = useState("");
  const [songsState, setSongsState] = useState(false);



  useEffect(() => {
    getSetlist(setlistId)
    console.log("songs: " + songs)
    console.log("setlistsongs: " + setlistSongs)
  }, [])

  // useEffect(() => {
  //   if (songsState) {
  //     console.log(songsState)
  //     songsState(false)
  //   }
  // }, [songsState])

  // useEffect(() => {
  //   renderSongs()
  //   console.log("rendersongs: " + songs)
  //   console.log("renderSetlistsongs: " + setlistSongs)
  // }, [])

  // function getManySongs(arr) {
  //   API.getManySongs([arr])
  //     .then(res => {
  //       console.log(res.data)
  //       setSongs(res.data)
  //     }).catch(err => console.log(err))
  // }

  function getSetlist(id) {
    console.log("setlistpage: " + id)
    API.getSetlist(id)
      .then(res => {
        console.log("songs gotten: " + res.data)
        setSongs(res.data.songs)
        setName(res.data.name)
      }).catch(err => console.log(err))
  }

  function renderSongs() {
    const newSongs = songs.map(song => {
      // API.getSong(song._id)
      //   .then(res => {
      //     console.log("then")
      //     setTitle(res.data.title);
      //     setKeySig(res.data.keySig);
      //   }).catch(err => console.log(err))
      return {
        ...song,
        title,
        keySig,
        blinkingText: false,
        ms: calcBpmToMs(song.bpm)
      }
    })
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
            <Card.Header><Row><Col><h4>{name}</h4></Col><Stars className="justify-content-end"></Stars></Row></Card.Header>
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
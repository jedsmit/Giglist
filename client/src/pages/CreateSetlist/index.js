import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import ModalButton from "../../components/ModalButton";
import CreateListSong from "../../components/CreateListSong"
import API from "../../utils/API"
import "./createSetlist.css"
import Navbar from "../../components/Navbar";

function CreateSetlist() {
  //states
  const [songs, setSongs] = useState([]);
  const [name, setName] = useState("");
  const [gigType, setGigType] = useState("");
  const [songState, setSongState] = useState("");
  const [addedSongs, setAddedSongs] = useState([]);

  //effects

  useEffect(() => {
    getSongs();
    console.log('it works');
  }, [])

  // useEffect(() => {

  // }, [])


  // save setlist to database when form is submitted
  const handleSubmit = (e) => {
    saveSetlist(e.target);
  }

  // handles text fields on form
  const handleInputChange = (e) => {
    e.preventDefault();
    setName({
      [e.target.name]: e.target.value
    })

  }

  // saves setlist to db
  const saveSetlist = (data) => {
    let name = data.name
    let gigtype = data.gigtype
    let songs = addedSongs

    API.addSetlist({
      name: name,
      gigtype: gigtype,
      songs: songs

    })
      .catch(err => console.log(err))
  }
  //gets all songs from db
  const getSongs = () => {
    API.getSongs()
      .then(response => {
        // console.log("API")
        let songs = response.data;
        // console.log(songs)
        setSongs(songs)
      });
  }

  //clicks

  //adds selected song to the setlist 
  const handleAddButtonClick = (song) => {
    let songToAdd = {
      _id: song._id,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      bpm: song.bpm,
      keySig: song.keySig
    };
    setAddedSongs([...addedSongs,
      songToAdd
    ]);
    //removes from song table
    setSongs(songs.filter(({ _id }) => _id !== song._id));
    console.log(addedSongs)
  }

  //removes selected song from the setlist 
  const handlesSubtractButtonClick = (song) => {
    setAddedSongs(addedSongs.filter(({ _id }) => _id !== song._id));
    //add back to songs 
    setSongs([...songs, song])
  }

  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid"><h1>Create a new Setlist!</h1></div>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>
          <Card>

            <Form onSubmit={handleSubmit} className="form">
              <Form.Group controlId="form-setlist-name">
                <Form.Label>Setlist Name</Form.Label>
                <Form.Control type="text" placeholder="Enter List Name" name="name" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="form-gig-type">
                <Form.Label>Gig Type</Form.Label>
                <Form.Control type="text" placeholder="Wedding" name="gigtype" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Songs</Form.Label>
                <Card>
                  <Table>
                    <tbody>
                      {
                        addedSongs.map((song, index) => {
                          // console.log(song._id)
                          return <tr key={index}>
                            {/* key={song._id} */}
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td><Button onClick={() => handlesSubtractButtonClick(song)}>-</Button></td>
                            {/* // keySig={song.key}
                        // bpm={song.bpm} */}
                          </tr>
                        })
                      }
                    </tbody>
                  </Table>
                </Card>
              </Form.Group>

              <Form.Group>
                <Link to="/">
                  <Button onClick={saveSetlist} variant="success float-right" type="submit">
                    Save List
                 </Button>
                </Link>
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col xs={5}>
          <Card>
            {/* displays all songs in the db  */}
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Genre</th>
                  {/* <th>Key</th>
                  <th>BPM</th> */}
                  <th>Add Song</th>
                </tr>
              </thead>
              <tbody>

                {
                  songs.map((song, index) => {
                    // console.log(song._id)
                    return <tr key={index}>
                      <CreateListSong
                        // key={song._id}
                        title={song.title}
                        artist={song.artist}
                        genre={song.genre}
                        // keySig={song.key}
                        // bpm={song.bpm}
                        onClick={() => handleAddButtonClick(song)}
                      />

                    </tr>
                  })
                }

              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default CreateSetlist;
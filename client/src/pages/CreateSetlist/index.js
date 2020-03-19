import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import ModalButton from "../../components/ModalButton";
import CreateListSong from "../../components/CreateListSong"
import API from "../../utils/API"
import "./createSetlist.css"
import Navbar from "../../components/Navbar";

function CreateSetlist(props) {
  //states
  const [songs, setSongs] = useState([]);
  const [name, setName] = useState("");
  const [gigtype, setGigtype] = useState("")
  const [addedSongs, setAddedSongs] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  //effects

  useEffect(() => {
    getSongs();
    console.log('it works');
  }, [])


  // save setlist to database when form is submitted
  const handleSubmit = (e) => {
    console.log("is it the obj?")
    e.preventDefault();

    //sends to backend
    API.addSetlist(
      {
        name: name,
        gigtype: gigtype,
        songs: songs
      }
    ).then(res => {
      //redirects to the home page using withRouter hook
      props.history.push("/")
    })
      .catch(err => console.log(err))

  };

  //gets all songs from db
  const getSongs = () => {
    API.getSongs()
      .then(response => {
        // console.log("API")
        let songs = response.data;
        // console.log(songs)
        setSongs(songs)
      });
  };

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

      <Row className="create-setlist-page">
        <Col xs={1}></Col>
        <Col xs={5}><div className="text-center"><h1 className="title">Create a new Setlist!</h1></div></Col>
        <Col xs={5}>
          <Card border="warning"><h3>Would Like to Add More Bad Ass Songs? </h3><Button variant="warning" onClick={() => setModalShow(true)}>
            Then Click This Bitch Right Here!!!!
      </Button>

            <ModalButton
              show={modalShow}
              onHide={() => setModalShow(false)} /></Card></Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>
          <Card border="warning">
            <Form onSubmit={e => handleSubmit} className="form">
              <Form.Group controlId="form-setlist-name">
                <Form.Label>Setlist Name</Form.Label>
                <Form.Control className="setlist-input" type="text" value={name} placeholder="Enter List Name" name="name" onChange={e => setName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="form-gig-type">
                <Form.Label>Gig Type</Form.Label>
                <Form.Control className="setlist-input" type="text" value={gigtype} placeholder="Wedding" name="gigtype" onChange={e => { setGigtype(e.target.value) }} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Songs</Form.Label>
                <Card border="warning">
                  <Table>
                    <tbody>
                      {
                        addedSongs.map((song, index) => {
                          // console.log(song._id)
                          return <tr className="list" key={index}>
                            {/* key={song._id} */}
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td><Button variant="dark" className="plus" onClick={() => handlesSubtractButtonClick(song)}><strong>-</strong></Button></td>
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
                  <Button onClick={e => handleSubmit(e)} variant="warning float-right" type="submit">
                    Save List
                 </Button>
                </Link>
              </Form.Group>
            </Form>

          </Card>
        </Col>
        <Col xs={5}>
          <Card border="warning">
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

export default withRouter(CreateSetlist);
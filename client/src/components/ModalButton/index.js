import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Song from "../Song";
import API from "../../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modalButton.css";



class ModalButton extends Component {

  // [isOpen, setIsOpen] = useState(false);

  state = {
    isOpen: false,
    songs: [{}],
    addedSong: {
      title: {
        value: " "
      }
    }
  }

  showModal = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  hideModal = () => {
    this.setState({ isOpen: false });
  };

  getSongs = () => {
    API.getSongs()
      .then(response => this.setState({ songs: response.data }))
  };


  handleAddButtonClick = (e) => {
    e.preventDefault();
    let title = e.target.title;
    let artist = e.target.artist;
    let genre = e.target.genre;
    let keySig = e.target.keySig;
    let bpm = e.target.bpm;

    console.log(title)

    // this.setState({
    //   addedSong: [{ ...addedSong }]
    // })

  }

  render() {

    return (

      <> <h6>Click to add songs before saving<button className=" btn btn-success float-right" onClick={this.showModal}>Add Songs</button></h6>

        <Modal size="lg" show={this.state.isOpen} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title>Add Songs</Modal.Title>
          </Modal.Header>
          <Modal.Body className="justify-content-center">
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Genre</th>
                  <th>Key</th>
                  <th>BPM</th>
                  <th>Add to list</th>
                </tr>
              </thead>
              <tbody>
                {this.getSongs()}
                {
                  this.state.songs.map((song) => {
                    return <tr>
                      <Song
                        key={song._id}
                        title={song.title}
                        artist={song.artist}
                        genre={song.genre}
                        keySig={song.keySig}
                        bpm={song.bpm}
                      />
                      <td><Button key={"button"} target={"<tr>"} onClick={this.handleAddButtonClick}>+</Button></td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
            {/* <Song
              key={this.props.key}
              title={this.props.title}
              artist={this.props.artist}
              genre={this.props.genre}
              keySig{this.props.keySig}
              bpm={this.props.bpm} /> */}
          </Modal.Body>
          <Modal.Footer>
            <button className=" btn btn-success" onClick={this.hideModal}>Cancel</button>
            <button className="save btn btn-success">Save</button>
          </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default ModalButton;
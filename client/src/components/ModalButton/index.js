import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Song from "../Song";
import API from "../../utils/API"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";



class ModalButton extends Component {

  // [isOpen, setIsOpen] = useState(false);

  state = {
    isOpen: false,
    songs: [{}]
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

  render() {

    return (
      <> <h6>Click to add songs before saving<button className=" btn btn-success float-right" onClick={this.showModal}>Add Songs</button></h6>

        <Modal size="lg" show={this.state.isOpen} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title>Add Songs</Modal.Title>
          </Modal.Header>
          <Modal.Body className="justify-content-center">
            <ul>
              {this.getSongs()}
              {
                this.state.songs.map((song) => {
                  return <Song
                    key={song._id}
                    title={song.title}
                    artist={song.artist}
                    genre={song.genre}
                    bpm={song.bpm}
                  />
                })
              }
            </ul>
            {/* <Song
              key={this.props.key}
              title={this.props.title}
              artist={this.props.artist}
              genre={this.props.genre}
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
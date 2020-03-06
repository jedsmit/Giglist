import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Song extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.artist}</td>
        <td>{this.props.genre}</td>
        <td>{this.props.bpm}</td>
        <td><Button>+</Button></td>

      </tr>
    )
  }
}

export default Song;
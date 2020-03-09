import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Song extends Component {

  render() {
    return (
      <>
        {this.props.key}
        <td>{this.props.title}</td>
        <td>{this.props.artist}</td>
        <td>{this.props.genre}</td>
        <td>{this.props.keySig}</td>
        <td>{this.props.bpm}</td>
      </>
    )
  }
}

export default Song;
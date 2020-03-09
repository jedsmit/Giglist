<<<<<<< HEAD
import React from "react";


function Song(props) {




  return (
    <>
      {props.key}
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td>{props.bpm}</td>
    </>
  )
=======
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
>>>>>>> 1eb179321473c41968eccc580ccadb5c59713b30
}


export default Song;
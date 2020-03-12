import React from "react";
import Button from "react-bootstrap/Button"


function Song(props) {

  return (
    <>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td>{props.keySig}</td>
      <td>{props.bpm}</td>
    </>
  )
}


export default Song;
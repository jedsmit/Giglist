import React from "react";
import "./song.css";


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
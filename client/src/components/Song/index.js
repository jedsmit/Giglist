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
}


export default Song;
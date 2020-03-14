import React from "react";
import Button from "react-bootstrap/Button"
import "./createListSong.css";


function CreateListSong(props) {

  return (
    <>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td><Button variant="dark" className="plus" onClick={props.onClick}><strong>+</strong></Button></td>
    </>
  )
}


export default CreateListSong;
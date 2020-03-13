import React from "react";
import Button from "react-bootstrap/Button"


function CreateListSong(props) {

    return (
        <>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td><Button onClick={props.onClick}>+</Button></td>
        </>
    )
}


export default CreateListSong;
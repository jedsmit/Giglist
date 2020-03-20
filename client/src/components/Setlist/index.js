import React, { useState } from "react";
import "./setlist.css"


function Setlist(props) {

  const [setlistState, setSetlistState] = useState(props)

  return (
    <>
      {props.name} {props.gigtype}
    </>

  )
}
export default Setlist;


import React, { useState } from "react";
import "./setlist.css"


function Setlist(props) {

  const [setlistState, setSetlistState] = useState(props)

  return (

    <li key={"li"} className="list-group-item">
      {props.name} {props.gigtype}
    </li>

  )
}
export default Setlist;


import React, { useState } from "react";


function Setlist(props) {

  const [setlistState, setSetlistState] = useState(props)

  return (

    <li key={"li"} className="list-group-item">
      {props.name} {props.gigtype}
    </li>

  )
}
export default Setlist;


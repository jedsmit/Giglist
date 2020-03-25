import React from "react";
import { Link } from "react-router-dom";
import "./setlistComponent.css";



function SetlistComponent(props) {

  return (
    <Link onClick={props.onClick} to={props.to}>
      {props.name} {props.gigtype}
    </Link>
  )
}
export default SetlistComponent;


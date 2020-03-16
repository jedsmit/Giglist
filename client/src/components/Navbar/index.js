import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (

    <nav className="justify-content-end navbar navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" to="/">Home</Link>
      <Link className="navbar-brand" to="/create-setlist">Create Setlist</Link>
    </nav>
  )
}

export default Navbar;
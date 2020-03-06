import React, { Component } from "react";

class Song extends Component {

  render() {
    return (
      <li>{this.props.title} by: {this.props.artist} genre: {this.props.genre} bpm: {this.props.bpm} </li>
    )
  }
}

export default Song;
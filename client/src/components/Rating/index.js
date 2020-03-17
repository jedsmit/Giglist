import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';
import "./stars.css";

export default class Stars extends Component {
  state = { value: 0 };
  render() {
    return (
      <BeautyStars className="stars"
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}
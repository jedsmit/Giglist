import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';
// import API from '../../utils/API';


export default class Stars extends Component {
  state = { value: 0 };


  render() {
    return (
      <BeautyStars
        value={this.state.value}
        activeColor={"#ffc107"}
        onChange={value => this.setState({ value })}

      />
    );
  }
}
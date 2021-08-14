/** @format */

import React, { Component } from "react";

export default class Photo extends Component {
  render() {
    return (
      <li className="photo">
        <img src={this.props.src} alt={this.props.alt} />
      </li>
    );
  }
}

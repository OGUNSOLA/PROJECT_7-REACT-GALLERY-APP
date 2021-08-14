/** @format */

import React, { Component } from "react";
import "../loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <h2>LOADING ....</h2>

        <div className="loader"></div>
      </div>
    );
  }
}

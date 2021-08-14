/** @format */

import React, { Component } from "react";
import noResult from "../No-results-found.jpeg";

export default class SearchGallery extends Component {
  render() {
    return (
      <div>
        <img src={noResult} alt="NO RESULT PAGE" />
      </div>
    );
  }
}

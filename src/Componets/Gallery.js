/** @format */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Photo from "./Photo";
import NoResult from "./NoResult";
import Loading from "./Loading";

class Gallery extends Component {
  render() {
    let display;
    if (this.props.loading === true) {
      display = <Loading />; // displays loading indicator while loading images
    } else if (this.props.data.length > 0) {
      display = this.props.data.map((photo) => {
        return (
          <Photo
            id={photo.id}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={photo.id}
            alt={photo.title}
          />
        );
      });
    } else {
      display = <NoResult />; // renders no result page
    }
    return (
      <div className="displayArea">
        <h1>{this.props.title} PHOTOS</h1>
        <ul className="gallery">{display}</ul>
      </div>
    );
  }
}

export default withRouter(Gallery);

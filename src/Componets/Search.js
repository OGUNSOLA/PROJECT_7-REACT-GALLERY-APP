/** @format */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    searchText: "",
  };

  // sets the searct text dynamically as its being ttyoed
  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  // pushes history parameter and gets images data
  handleSubmit = (e) => {
    if (this.state.searchText.length > 0) {
      e.preventDefault();
      this.props.handleSearch(this.state.searchText);
      this.props.history.push(`/search/${this.state.searchText}`);
      e.currentTarget.reset();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="TYPE IN YOUR SEARCH"
          required
        />
        <button type="submit" className="search-button">
          {/* <link to={{ pathname: `/search/${this.state.searchText}` }}></link> */}
          <svg
            fill="#fff"
            height="14"
            viewBox="0 0 23 23"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

export default withRouter(Search);

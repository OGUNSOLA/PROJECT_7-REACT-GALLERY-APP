/** @format */

import React, { Component } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { apiKey } from "./Key";
import axios from "axios";
import Gallery from "./Componets/Gallery";
import Nav from "./Componets/Nav";
import Search from "./Componets/Search";
import { koalaPhotos, pandaPhotos, pumaPhotos } from "./Componets/NavData";
import NotFound from "./Componets/NotFound";

class App extends Component {
  state = {
    photosData: [],
    loading: true,
    title: "",
  };

  componentDidMount() {
    this.performSearch("waterfall");
  }

  //loads new data when componets updates
  componentDidUpdate(prevProps) {
    console.log(this.props.match.params);
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const newSearch = this.props.location.pathname.split("/")[2];
      this.performSearch(newSearch);
    }
  }

  // gets data from flickr API
  performSearch = (query) => {
    this.setState({
      loading: true,
    });

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&is_getty=true&safe_search=1&per_page=24&page=2&format=json&nojsoncallback=12`
      )
      .then((res) => {
        this.setState({
          photosData: res.data.photos.photo,
          loading: false,
          title: query,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Search handleSearch={this.performSearch} />
        <>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Redirect to="/waterfall" />
            </Route>
            <Route
              path="/waterfall"
              render={() => (
                <Gallery
                  title="WATERFALLS"
                  data={koalaPhotos}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              path="/macaw"
              render={() => (
                <Gallery
                  title="MACAW"
                  data={pandaPhotos}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              path="/bison"
              render={() => (
                <Gallery
                  title="BISON"
                  data={pumaPhotos}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              path="/search/:topic"
              render={({ match }) => (
                <Gallery
                  query={match.params.topic}
                  title={this.state.title}
                  data={this.state.photosData}
                  loading={this.state.loading}
                />
              )}
            />
            {/* not found route */}
            <Route component={NotFound} />
          </Switch>
        </>
      </>
    );
  }
}

export default withRouter(App);

import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {apiKey } from './Key';
import axios from 'axios';
import Gallery from './Componets/Gallery'
import Nav from './Componets/Nav';
import Search from './Componets/Search';
import { koalaPhotos , pandaPhotos, pumaPhotos} from "./Componets/NavData";
import NotFound from "./Componets/NotFound";


export default class App extends Component {


  state ={
    photosData :[],
    loading:true,
    title :''

  }

 

  componentDidMount(){
    this.performSearch('Canyon');
  }

  performSearch =(query) =>{
  this.setState({
    loading:true,
  })

    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&is_getty=true&safe_search=3&per_page=24&page=1&format=json&nojsoncallback=12`
    ).then((res) => {
      this.setState({
        photosData :res.data.photos.photo,
      loading:false,
      title :query
      })
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
     
      <BrowserRouter>
       <Search handleSearch={this.performSearch}/>
 <>
 <Nav />
        <Switch>
        <Route exact path='/' render={() => <Gallery title={this.state.title} data={this.state.photosData} getData={this.performSearch}  loading={this.state.loading}  />} />
        <Route  path='/waterfall' render={() => <Gallery title='WATERFALLS'  data={koalaPhotos} getData={this.performSearch} loading={this.state.loading} />} />
        <Route  path='/macaw' render={() => <Gallery title='MACAW'  data={pandaPhotos} getData={this.performSearch} loading={this.state.loading}  />}  />
        <Route  path='/bison' render={() => <Gallery title='BISON'  data={pumaPhotos} getData={this.performSearch}  loading={this.state.loading} />}  />
        <Route  path='/search/:topic' render={({match}) => <Gallery title={match.params.topic}  data={this.state.photosData} getData={this.performSearch} loading={this.state.loading} />} />
        <Route component={NotFound}/>
        </Switch>
      </>
      </BrowserRouter>
    )
    
     
  }
}

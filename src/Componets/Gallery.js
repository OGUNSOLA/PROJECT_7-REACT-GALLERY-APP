import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';
import Loading from './Loading';

class Gallery extends Component {

    componentDidUpdate(){
       this.props.getData(this.props.title);
    }
    
    render() {
      console.log(this.props.loading);
      let display;
      if(this.props.loading === true){
          display =<Loading />
      } else if(this.props.data.length > 0){
        display = this.props.data.map((photo)=>{
            return (<Photo id={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title} />)})
      } else {
          display = <NotFound />
      }
        return (
           <div>
               <h1>{this.props.title} Photos</h1>
               {display}
           </div>
        )
    }
}

export default withRouter(Gallery);



import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';
import NoResult from './NoResult';
import Loading from './Loading';

class Gallery extends Component {

  
    
    render() {
      let display;
      if(this.props.loading === true){
          display =<Loading />
      } else if(this.props.data.length > 0){
        display = this.props.data.map((photo)=>{
            return (<Photo id={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title} />)})
      } else {
          display = <NoResult />
      }
        return (
           <div className="displayArea">
               <h1>{this.props.title} Photos</h1>
               <div className="gallery">
               {display}
               </div>
              
           </div>
        )
    }
}

export default withRouter(Gallery);



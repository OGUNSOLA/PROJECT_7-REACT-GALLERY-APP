import {apiKey } from '../Key';
import axios from 'axios';


        let koalaPhotos={};
          let pandaPhotos={};
          let pumaPhotos={};


        axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=koala&per_page=24&page=1&format=json&nojsoncallback=1`
        ).then(res => {
            koalaPhotos = res.data.photos.photo;
        });
        axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=panda&per_page=24&page=1&format=json&nojsoncallback=1`
        ).then(res => {
            pandaPhotos = res.data.photos.photo
        });;
        axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=puma&per_page=24&page=1&format=json&nojsoncallback=1`
        ).then(res => {
            pumaPhotos = res.data.photos.photo
        });;
      
      
        
      
export{ koalaPhotos, pandaPhotos, pumaPhotos};
/** @format */

import { apiKey } from "../Key";
import axios from "axios";

let koalaPhotos = {};
let pandaPhotos = {};
let pumaPhotos = {};

// fetches images for tthe NAV elements
axios
  .get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfall&per_page=24&page=1&format=json&nojsoncallback=1`
  )
  .then((res) => {
    koalaPhotos = res.data.photos.photo;
  })
  .catch((error) => {
    console.log(error);
  });
axios
  .get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=macaw&per_page=24&page=1&format=json&nojsoncallback=1`
  )
  .then((res) => {
    pandaPhotos = res.data.photos.photo;
  })
  .catch((error) => {
    console.log(error);
  });
axios
  .get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bison&per_page=24&page=1&format=json&nojsoncallback=1`
  )
  .then((res) => {
    pumaPhotos = res.data.photos.photo;
  })
  .catch((error) => {
    console.log(error);
  });

export { koalaPhotos, pandaPhotos, pumaPhotos };

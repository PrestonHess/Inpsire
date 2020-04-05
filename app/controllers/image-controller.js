import ImageService from "../services/image-service.js";
import store from "../store.js";

let _drawBGImg = function () {
  let img = store.State.img.url.toString();
  //NOTE Add ${img} to the background image to update according to get img api call
  document.getElementById('bg-image').style.backgroundImage = `url(${img})`
}

export default class ImageController {

  constructor() {
    ImageService.getImg()
    store.subscribe('img', _drawBGImg)
  }
}

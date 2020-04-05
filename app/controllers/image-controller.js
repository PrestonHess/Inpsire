import ImageService from "../services/image-service.js";
import store from "../store.js";

let _drawBGImg = function () {
  let img = store.State.img.url.toString();
  //NOTE Add ${img} to the background image to update according to get img api call
  document.getElementById('bg-image').style.backgroundImage = `url('https://splashbase.s3.amazonaws.com/lifeofpix/large/Life-of-Pix-free-stock-photos-sunset-wood-lake-trees-escoveries.jpg')`
}

export default class ImageController {

  constructor() {
    store.subscribe('img', _drawBGImg)
  }
}

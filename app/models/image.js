export default class Img {
  constructor(data) {
    this.url = data.large_url || data.url
  }
}
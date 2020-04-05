
export default class Quote{
  constructor(data) {
    this.author = data.author
    this.quote = data.body
  }

  get template() {
    return /*html*/ `
      <h6>${this.quote}</h6>
      <h6 class="mb-3 text-muted">- ${this.author}</h6>
    `
  }
}
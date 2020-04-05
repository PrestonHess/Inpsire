
export default class Quote{
  constructor(data) {
    this.author = data.author
    this.quote = data.body
  }

  get template() {
    return /*html*/ `
      <div class="mx-5">
      <h6 class="text-muted">${this.quote}</h6>
      <h6 class="mb-3 text-muted">- ${this.author}</h6>
      </div>
    `
  }
}
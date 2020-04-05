
export default class Quote{
  constructor(data) {
    this.author = data.author
    this.quote = data.body
  }

  get template() {
    // Tool-tip
    // @ts-ignore
    $(document).ready(function(){
      // @ts-ignore
      $('[data-toggle="tooltip"]').tooltip();   
    });

    return /*html*/ `
      <div class="mb-4 mx-5">
      <h6 data-toggle="tooltip" class="animated bounce" title="${this.author}">"${this.quote}"</h6>
      </div>
    `
  }
}
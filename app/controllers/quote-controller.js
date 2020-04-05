import QuoteService from "../services/quote-service.js";
import store from "../store.js";

let _drawQuote = function() {
  let template = store.State.quote.template;
  document.getElementById('quote').innerHTML = template;
}
export default class QuoteController {

  constructor() {
    store.subscribe('quote', _drawQuote)
    QuoteService.getQuote()
  }
}

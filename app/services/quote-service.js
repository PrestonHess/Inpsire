import Quote from "../models/quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {

  constructor() {
  }

  getQuote() {
    _quoteApi.get()
      .then(res => {
        let quoteData = res.data.quote;
        let newQuote = new Quote(quoteData)
        store.commit('quote', newQuote)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
}

const quoteService = new QuoteService();
export default quoteService;

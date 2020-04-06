// @ts-ignore
import TimeController from "../controllers/time-controller.js";

class TimeService {
  
  constructor() {
    this.session = ''
  }

  get Time(){
    let date = new Date();
    let h = date.getHours() - 1;
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
      h = 12;
    }
    
    if(h > 12){
      h = h - 12;
      session = "PM";
    }
    
    if (session == "AM") {
      this.session = 'Morning'
    } else {this.session = 'Afternoon'}
    
    // @ts-ignore
    h = (h < 10) ? "0" + h : h;
    // @ts-ignore
    m = (m < 10) ? "0" + m : m;
    // @ts-ignore
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    return time
  }
}

const TIMESERVICE = new TimeService()
export default TIMESERVICE;
import TimeService from "../services/time-service.js"

let _drawTime = function() {
  let time = TimeService.Time
  document.getElementById("session").innerText = "Good " + TimeService.session
  document.getElementById("time").innerText = time;
  setTimeout(_drawTime, 1000)
}

export default class TimeController {

  constructor() {
    _drawTime()
  }

}

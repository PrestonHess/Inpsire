
export default class Weather {
  constructor(data) {
    this.city = data.name
    this.description = data.weather
    this.kelvin = data.main.temp
  }

  get Template() {
    return /*html*/ `
    <div class="text-right mt-3 ml-auto">
        <h5 class="text-capitalize">${this.city} Weather</h5>
        <h6 class="text-capitalize text-muted">${this.description[0].description} </p>
        <img id="weather-icon" src="http://openweathermap.org/img/wn/${this.description[0].icon}@2x.png" class="img-fluid mr-4"/>
        <h3> ${this.Fahrenheit} &#8457;</h3>
    </div>
    `
  }
  get Fahrenheit(){
    let celsius = this.kelvin - 273;
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    return fahrenheit;
  }
}
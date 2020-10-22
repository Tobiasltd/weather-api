class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feelslike");
    this.cloud = document.getElementById("w-cloud");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${weather.main.temp} º`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like:  ${weather.main.feels_like} º`;
    this.cloud.textContent = `Cloudiness: ${weather.clouds.all}%`;
    this.wind.textContent = `Windiness: ${weather.wind.speed} km/h`;
  }
}

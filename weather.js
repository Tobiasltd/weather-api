class Weather {
  constructor(city, country) {
    this.apiKey = "f99156ebcc5c31fde99689b49ebd02d0";
    this.city = city;
    this.country = country;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

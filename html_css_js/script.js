const apiKey = "<YOUR_API_KEY>";
const apiUrl = "http://api.weatherapi.com/v1/current.json?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `key=${apiKey}` + `&q=${city}`);

  if (response.status == 400) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

    if (data.current.condition.text == "Partly Cloudy") {
      weatherIcon.src = "images/cloud.png";
    } else if (data.current.condition.text == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.current.condition.text == "Light rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.current.condition.text == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.current.condition.text == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

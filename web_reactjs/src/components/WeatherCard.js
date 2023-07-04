import React from "react";
import { images } from "../constants";

const WeatherCard = ({ weatherData }) => {
  const { location, current } = weatherData;

  const getWeatherIcon = (condition) => {
    if (condition.includes("Partly cloudy")) {
      return images.clouds;
    } else if (condition.includes("Overcast")) {
      return images.clouds;
    } else if (condition.includes("Sunny")) {
      return images.clear;
    } else if (condition.includes("Moderate rain")) {
      return images.rain;
    } else if (condition.includes("Light rain")) {
      return images.rain;
    } else if (condition.includes("Drizzle")) {
      return images.drizzle;
    } else if (condition.includes("Mist")) {
      return images.mist;
    } else if (condition.includes("Fog")) {
      return images.mist;
    }
  };

  const weatherIcon = getWeatherIcon(current.condition.text);

  return (
    <div className='weather'>
      <img src={weatherIcon} className='weather-icon' alt='Weather Icon' />
      <h1 className='temp'>{Math.round(current.temp_c)}°C</h1>
      <h2 className='city'>{location.name}</h2>
      <div className='details'>
        <div className='col'>
          <img src={images.humidity} alt='Humidity' />
          <div>
            <p className='humidity'>{current.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className='col'>
          <img src={images.wind} alt='Wind Speed' />
          <div>
            <p className='wind'>{current.wind_kph} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

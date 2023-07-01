import React, { useState } from "react";
import { images } from "../constants";

const Card = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const api_key = "435f89fc50214542be7133005233006";
  const base_url = "http://api.weatherapi.com/v1/current.json?";

  // const apiKey = process.env.API_KEY;
  // const apiUrl = process.env.API_URL;
  // console.log(apiUrl);

  const checkWeather = async (city) => {
    try {
      const response = await fetch(`${base_url}key=${api_key}&q=${city}`);

      const data = await response.json();
      console.log(data);

      if (response.status === 400) {
        setError(true);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setWeatherData(null);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    checkWeather(city);
  };

  return (
    <div className='card'>
      <div className='search'>
        <input
          type='text'
          placeholder='enter city name'
          spellCheck='false'
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <img src={images.search} alt='search' />
        </button>
      </div>
      {error && <p className='error'>Invalid city name</p>}
    </div>
  );
};

export default Card;

import "./App.css";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = "<YOUR_API_KEY>";
  const apiUrl = "<API_BASE_URL>";

  const handleSearch = async () => {
    try {
      const response = await fetch(`${apiUrl}${apiKey}&q=${city}`);
      console.log(response);

      if (response.status === 400) {
        setError(true);
        setWeatherData(null);
      } else {
        const contentType = response.headers.get("content-type");
        const responseData = contentType.includes("application/json")
          ? await response.json()
          : await response.text();

        if (typeof responseData === "object") {
          setWeatherData(responseData);
          console.log(responseData);
          setError(false);
        } else {
          setError(true);
          setWeatherData(null);
        }
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setWeatherData(null);
    }
  };

  return (
    <div className='card'>
      <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />
      {error && <div className='error'>Invalid city name</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: truue,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "8c015c55555e4a56a568e7b57076b8d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>
        <div className="weather-app">
          <div className="row">
            <div className="col-4 weather-parameters">
              <strong id="temperature">{weatherData.temperature}</strong>
              <span className="degree-symbol">ºC</span>
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
            <div className="col-3" id="weather-icon">
              <img src="" id="icon" alt={weatherData.description} />
            </div>
            <div className="col-5" id="city-time-description">
              <h1 id="city" className="text-capitalize">
                {weatherData.city}
              </h1>
              <ul>
                <li id="date">Monday 16:47</li>
                <li id="description" className="text-capitalize">
                  {weatherData.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c015c55555e4a56a568e7b57076b8d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

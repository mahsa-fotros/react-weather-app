import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="search-form">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
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
            <strong id="temperature">20</strong>
            <span className="degree-symbol">ºC</span>
            <ul>
              <li>
                Humidity: <span id="humidity">70</span>%
              </li>
              <li>
                Wind: <span id="wind">30</span> km/h
              </li>
            </ul>
          </div>
          <div className="col-3" id="weather-icon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              id="icon"
              alt="weather icon"
            />
          </div>
          <div className="col-5" id="city-time-description">
            <h1 id="city">Tehran</h1>
            <ul>
              <li id="date">Monday 16:47</li>
              <li id="description">Rainy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

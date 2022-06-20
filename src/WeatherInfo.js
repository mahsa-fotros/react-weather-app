import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-app">
        <div className="row">
          <div className="col-4 weather-parameters">
            <strong id="temperature">{props.data.temperature}</strong>
            <span className="degree-symbol">ºC</span>
            <ul>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
          <div className="col-4" id="weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-4" id="city-time-description">
            <h1 id="city" className="text-capitalize">
              {props.data.city}
            </h1>
            <ul>
              <li id="date">
                <FormattedDate date={props.data.date} />
              </li>
              <li id="description" className="text-capitalize">
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

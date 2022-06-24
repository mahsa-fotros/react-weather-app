import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="forecast-day">Tue</div>
      <WeatherIcon code="01d" size={40} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">18° </span>
        <span className="forecast-temperature-min">11°</span>
      </div>
    </div>
  );
}

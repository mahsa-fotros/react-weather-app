import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sattt"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}

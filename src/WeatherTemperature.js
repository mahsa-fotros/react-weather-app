import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong id="temperature">{props.celsuis}</strong>
      <span className="degree-symbol">℃</span>
    </div>
  );
}

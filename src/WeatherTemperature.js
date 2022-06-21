import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsuis");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }
  function fahrenheit() {
    return props.celsuis * (9 / 5) + 32;
  }
  if (unit === "celsuis") {
    return (
      <div className="WeatherTemperature">
        <strong id="temperature">{props.celsuis}</strong>
        <span className="degree-symbol">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong id="temperature">{Math.round(fahrenheit())}</strong>
        <span className="degree-symbol">
          <a href="/" onClick={showCelsuis}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}

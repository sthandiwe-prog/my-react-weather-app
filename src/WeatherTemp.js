import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [units, setUnits] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheitTemperature() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (units === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature ms-2"> {props.celsius} </span>
        <span className="celsius-temp">
          °C |{" "}
          <a href="/" onClick={toFahrenheit}>
            {" "}
            °F{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature ms-2"> {fahrenheitTemperature()} </span>
        <span className="celsius-temp">
          <a href="/" onClick={toCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}

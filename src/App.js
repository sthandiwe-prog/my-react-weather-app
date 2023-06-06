import React, { useState } from "react";
import RealTimeDate from "./RealTimeDate";
import WeatherTemp from "./WeatherTemp";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";

export default function App() {
  let apiKey = `b5o50f2tf34ccb880a7e952a5cb31e4d`;

  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Durban");

  function updateData(response) {
    setWeatherData({
      ready: true,
      name: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdates(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="App">
        <div className="container">
          <form className="mb-4 mt-2">
            <div className="row">
              <div className="col-9">
                {" "}
                <input
                  type="search"
                  onChange={handleCityUpdates}
                  className="form-control"
                  placeholder="Enter a city..."
                />{" "}
              </div>
              <div className="col-3">
                {" "}
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Search"
                  className=" btn btn-danger w-100"
                />
              </div>
            </div>
          </form>
          <h1>{weather.name}</h1>
          <div className="row">
            <div className="col-6">
              {" "}
              <ul>
                <li>
                  <RealTimeDate date={weather.date} />{" "}
                </li>
                <li className="text-capitalize mb-4">
                  {" "}
                  {weather.description}{" "}
                </li>
                <li>
                  <div className="clearfix">
                    {" "}
                    <img
                      src={weather.icon}
                      className="float-start"
                      alt={weather.description}
                    />{" "}
                    <div className="float-start">
                      <WeatherTemp celsius={weather.temperature} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity : {weather.humidity}% </li>
                <li>Wind : {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          {" "}
          This project was coded by{" "}
          <strong className="text-dark">Sthandiwe Gasa</strong>, and is{" "}
          <a
            href="https://github.com/sthandiwe-prog/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "on load...";
  }
}

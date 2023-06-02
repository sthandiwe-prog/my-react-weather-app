import React, { useState } from "react";
import RealTimeDate from "./RealTimeDate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Durban");
  function updateData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    });
  }

  function search() {
    let apiKey = `b98755d1364b40ce6f0dab6b8d71729b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
                <li className="text-capitalize"> {weather.description} </li>
                <li>
                  <div className="clearfix">
                    {" "}
                    <img
                      src={weather.icon}
                      className="float-start"
                      alt={weather.description}
                    />{" "}
                    <div className="float-start">
                      <span className="temperature ms-2">
                        {" "}
                        {weather.temperature}{" "}
                      </span>
                      <span className="celsius-temp">°C</span>
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
      </div>
    );
  } else {
    search();
    return "on load...";
  }
}

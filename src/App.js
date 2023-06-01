import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  let city = "Paris";
  const [weather, setWeatherData] = useState({ ready: false });

  function updateData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: `Thursday 11:00`,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    });
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
                  className="form-control"
                  placeholder="Enter a city..."
                />{" "}
              </div>
              <div className="col-3">
                {" "}
                <input
                  type="submit"
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
                <li>{weather.date} </li>
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
    let apiKey = `b98755d1364b40ce6f0dab6b8d71729b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateData);
  }
}

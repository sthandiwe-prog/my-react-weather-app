import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
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

        <h1>Weather App</h1>
        <div className="row">
          <div className="col-6">
            {" "}
            <ul>
              <li> Thursday 13:43 </li>
              <li> fog </li>
              <li>
                <div className="clearfix">
                  {" "}
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    className="float-start"
                    alt="fog"
                  />{" "}
                  <div className="float-start">
                    <span className="temperature ms-2"> 27 </span>
                    <span className="celsius-temp">°C</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity : 78% </li>
              <li>Wind : 1.54 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

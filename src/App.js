import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
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
              <input type="submit" value="Search" className=" btn btn-danger" />
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
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="fog"
                />
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

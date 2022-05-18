import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">New York</h1>
              <ul>
                <li>
                  Last updated: <span id="date">12:00 PM</span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="Sunny"
                    class="float-left"
                  />
                  <strong id="temperature">25</strong>
                  <span className="units">°C | °F</span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">52</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">12</span> mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <small>
            <a href="https://github.com/Lynlee21/weather-app-react">
              Open-source code
            </a>
            by Lynlee Anderson
          </small>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li>
            <span id="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li id="description" className="text-capitalize">
            {props.data.description}
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              class="float-left"
            />
            <strong id="temperature">
              {Math.round(props.data.temperature)}
            </strong>
            <span className="units">°C | °F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

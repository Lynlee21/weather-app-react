import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon code={props.data.iconUrl} size={52} />
              </div>{" "}
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
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
    </div>
  );
}

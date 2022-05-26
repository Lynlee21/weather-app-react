import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-date">Thursday </div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature">19°</span>{" "}
            <span className="weather-forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

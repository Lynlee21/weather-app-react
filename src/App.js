import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <small>
            <a href="https://github.com/Lynlee21/weather-app-react">
              Open-source code
            </a>{" "}
            by Lynlee Anderson
          </small>
        </footer>
      </div>
    </div>
  );
}

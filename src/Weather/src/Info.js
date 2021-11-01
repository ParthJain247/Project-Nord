import React from "react";
import "./info.css";
function Info({ data }) {
  return data ? (
    <div className="information_container">
      <h1>
        Location: {data.name} {data.sys.country}
      </h1>

      <div>
        <i class="fas fa-thermometer"></i>
        <p>Current Temperature: {data.main.temp}&#xb0;C</p>
      </div>
      <div>
        <i class="fab fa-hotjar"></i>
        <p>Max Temperature: {data.main.temp_max}&#xb0;C</p>
      </div>
      <div>
        <i class="fas fa-icicles"></i>
        <p>Min Temperature: {data.main.temp_min}&#xb0;C</p>
      </div>
      <div>
        <i class="fas fa-umbrella-beach"></i>
        <p>Humidity: {data.main.humidity}</p>
      </div>
      <div>
        <i class="fas fa-gem"></i>
        <p>Pressure: {data.main.pressure}</p>
      </div>
      <div>
        <i class="fas fa-sticky-note"></i>
        <p>Description: {data.weather[0].description}</p>
      </div>
      <div>
        <i class="fas fa-wind"></i>
        <p>Wind Speed: {data.wind.speed}m/s</p>
      </div>
      <div>
        <i class="fas fa-compass"></i>
        <p>Wind Degree: {data.wind.deg}</p>
      </div>
    </div>
  ) : (
    " "
  );
}

export default Info;

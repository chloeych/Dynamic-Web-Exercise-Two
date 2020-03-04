import React from "react";
import axios from 'axios';

  //API KEYS
  const defaultKey = "c1fbe0d0da8e9e7f8d28d29d27903dcd";

  function Home() {
    return (
    <div className="Home">
    <h1> Weather in "City" </h1>
      <div className="WeatherInfo">
        
        <div className="WeatherInfo_Image">
          <img src="" alt="" />
        </div>
        
        <div className="WeatherInfo_Data">

          <div className="CurrentTemperature">
            <p className="CurrentTemperatureTemp">48&#176;</p>
            <p className="CurrenttemperatureLabel">Current Temperature</p>

          </div>

          <div className="OtherTemperatures">
            <p>High Temp: <strong>53&#176;</strong></p>
            <p>Low Temp: <strong>32&#176;</strong></p>
          </div>

            <p>Humidity: 100%</p>
            <p>Wind: 10mph</p>

        </div>
      </div>
    </div>

)}

export default Home;

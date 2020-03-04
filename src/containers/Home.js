import React, { useEffect, useState } from "react";
import axios from 'axios';

  //API KEYS
  const defaultKey = "c1fbe0d0da8e9e7f8d28d29d27903dcd";

  function Home() {

    const[weatherData, setWeatherData] = useState({});
    const[city, setCity] = useState('Shanghai');
    const[currentTemperature, setCurrentTemperature]=useState("");
    const[currentHighTemperature, setCurrentHighTemperature]=useState("");
    const[currentLowTemperature, setCurrentLowTemperature]=useState("");
    const[currentHumidity, setCurrentHumidity]=useState("");
    const[currentWind, setCurrentWind]=useState("");

    useEffect(() => {
      // Make a request for the weather by city
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'Shanghai'}&units=metric&appid=${defaultKey}`)
      .then(function (response) {
       // handle success
        console.log(response);
        setWeatherData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        });
      }, []);

      // [] is required and by putting nothing in there it means that it will only run once 
      // Syntax requires for ({}, []);
      // if anything in the [] changes then it will call the function/callback function e.g. will check to see if the length of questions are correct
    
    useEffect(()=> {
      if (weatherData.main){
        setCurrentTemperature(weatherData.main.temp);
        setCurrentHighTemperature(weatherData.main.temp_max);
        setCurrentLowTemperature(weatherData.main.temp_min);
        setCurrentHumidity(weatherData.main.humidity);
        setCurrentWind(weatherData.wind.speed);
      }
    }, [weatherData]);
  

    return (
    <div className="Home">
    <h1> Weather in {city} </h1>
      <div className="WeatherInfo">
        
        <div className="WeatherInfo_Image">
          <img src="" alt="" />
        </div>
        
        <div className="WeatherInfo_Data">

          <div className="CurrentTemperature">
            <p className="CurrentTemperatureTemp">{currentTemperature}&#176;</p>
            <p className="CurrenttemperatureLabel">Current Temperature</p>

          </div>

          <div className="OtherTemperatures">
            <p>High Temp: <strong>{currentHighTemperature}&#176;</strong></p>
            <p>Low Temp: <strong>{currentLowTemperature}&#176;</strong></p>
          </div>

          <div className="OtherInfo">

            <p>Humidity: <strong>{currentHumidity}%</strong></p>
           
            <p>Wind: <strong>{currentWind}mph</strong></p>
            
            </div>
        </div>
      </div>
    </div>

)}

export default Home;

// weatherData.main = undefined 
// weatherData is an empty object 
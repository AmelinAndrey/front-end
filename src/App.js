import React, { useState } from 'react';
const api = {
  key: "c431e419d0eeb371e4a3419340d106c0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const query = 'Kyiv'
  const [weather, setWeather] = useState({});
  

  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });

  return (
    <div className="app">
      <main>
        <div className="wether in Kyiv">
          wether in Kyiv
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{Date()}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;

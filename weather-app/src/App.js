import React, { useState } from 'react';

const api = {
  key: "b6ba21bbb4fc867b8891a58a7e75d5e9",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});
const [unit, setUnit] = useState('imperial');

//Imperial = true || Metric = false


const search = evt => {
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
}

const isUnit = () => {
  unit === 'imperial' ? setUnit('metric') : setUnit('imperial');
  console.log(unit);
}

const convertTemp = temp => {
  if(unit === 'imperial') {
    return Math.round((temp - 32) * (5/9)) + '°C';
  } else {
    return Math.round(temp) + '°F';
  }
}

const dateBuilder = d => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${month} ${date}, ${year}`
}

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar" 
          spellCheck="true" 
          placeholder="Search by City" 
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp" onClick={isUnit}>
              {convertTemp(weather.main.temp)}
            </div>
            <div className="weather">
              {weather.weather[0].description}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
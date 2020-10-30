import React from 'react';

const apiKey = {
  key: "b6ba21bbb4fc867b8891a58a7e75d5e9",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

const dateBuilder = (d) => {
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
          <input type="text" className="search-bar" spellcheck="true" placeholder="Search by City or Zip Code"></input>
        </div>
        <div className="location-box">
          <div className="location">San Francisco, CA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
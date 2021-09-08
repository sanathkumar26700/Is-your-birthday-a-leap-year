import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [Result, setResult] = useState("");

  let date;
  function leapYearHandler(e) {
    if (date) {
      var year = Number(date.slice("0", "4"));
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        setResult("You were born in a Leap year 🥳🥳");
      } else {
        setResult("You were not born in a leap year 🙁");
      }
    } else {
      setResult("You must enter a date 😑");
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1> Is your birthday a leap year?</h1>
        <input
          type="date"
          onChange={(e) => {
            date = e.target.value;
          }}
          required
        />
        <button className="btn" onClick={leapYearHandler}>
          Check Here
          <span role="img" aria-label>
            {" "}
            👆🏻
          </span>
        </button>
        <div className="output">{Result}</div>
      </div>
    </div>
  );
}

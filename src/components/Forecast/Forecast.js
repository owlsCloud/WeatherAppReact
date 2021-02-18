import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";

const Forecast = ({ city }) => {
  let [responseObj, setResponseObj] = useState({});
  const getForecast = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0a9330b8d2msh463b0fc6e4004b1p1beda2jsn958aeb032414",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      });
  };
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <Conditions responseObj={responseObj} />
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

export default Forecast;

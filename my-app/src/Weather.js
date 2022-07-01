import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The temperature in ${props.city} is ${Math.round(response.data.main.temp)}`)
  }

  let apiKey = "7654bb3646824703bcfdf4ced8409f03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <h2>This is the Weather</h2>
  );
}
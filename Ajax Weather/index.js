import requestWeather from "./requestWeather.js";
import fetchData from "./fetchData.js";

requestWeather(
  fetchData,
  `http://api.openweathermap.org/data/2.5/weather?q=TOWN&units=metric&APPID=5d066958a60d315387d9492393935c19`,
  ".weather_block",
  "button",
  "input"
);

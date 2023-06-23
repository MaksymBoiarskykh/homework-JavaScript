import createWeather from "./createWeather.js";
import createErrorMassage from "./createErrorMassage.js";

function requestWeather(fetchData, url, fieldHtml, buttonHtml, townHtml) {
  const container = document.querySelector(fieldHtml);
  const button = document.querySelector(buttonHtml);
  const town = document.querySelector(townHtml);

  return button.addEventListener("click", () => {
    const urlFull = url.split("TOWN").join(town.value.trim());
    town.value = "";

    return fetchData(urlFull)
      .then((data) => createWeather(data, container))
      .catch((error) => createErrorMassage(error, container));
  });
}

export default requestWeather;

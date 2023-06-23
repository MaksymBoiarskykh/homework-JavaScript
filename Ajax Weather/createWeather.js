function createWeather(data, container) {
  const closeButton = document.createElement("button");
  closeButton.textContent = "close";
  closeButton.classList.add("btn", "btn-danger", "mt-1");

  container.innerHTML = ` 
    <div class="row px-3 py-2 bg-success text-white rounded">
      <div class="col">
        <div class="h1">${data.name}</div>
        <div>temp - ${data.main.temp}</div>
        <div>pressure - ${data.main.pressure}</div>
        <div>description - ${data.weather[0].description}</div>
        <div>humidity - ${data.main.humidity}</div>
        <div>wind speed - ${data.wind.speed}</div>
      </div> 
      <div class="col text-end">
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
      </div>
    </div>
  `;

  container.append(closeButton);
  closeButton.addEventListener("click", () => (container.innerHTML = ""));

  return container;
}
export default createWeather;

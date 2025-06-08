
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", changeCity);

function changeCity(inputFromSearchForm){
inputFromSearchForm.preventDefault();
   let cityInput = document.querySelector(".city-input");
   let city = cityInput.value;
   let displayCity = document.querySelector(".display-city");
   displayCity.innerHTML = `Forecast for <strong>${city}</strong>`;
   fetchApi(city);
   getForecast(city);
}

function fetchApi(city){
 let currentApi = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ff3f6c762d03ea64t3ab6978450d240o&units=metric`;
 axios.get(currentApi).then(displayData);
}

 function displayData(city){

  let displayToday = document.querySelector("#today-module");
  let description = city.data.condition.description;
  description= description.charAt(0).toUpperCase() + description.slice(1);

  displayToday.innerHTML = `
  <div id="today">
  <div class="forecast-day">Today</div><p>
  <img src="${city.data.condition.icon_url}"><br />
  <em>${description}</em><br />
    <strong>Current temp:</strong> ${Math.round(city.data.temperature.current)} °C
    <br />
    <strong>Feels like:</strong> ${Math.round(city.data.temperature.feels_like)} °C
    <br />
    <strong>Wind: </strong>${city.data.wind.speed} m/s
    <br />
  <strong>Humidity: </strong>${city.data.temperature.humidity}%
  </div>
`
 }

 function getForecast(city){
  let forecastApi = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=ff3f6c762d03ea64t3ab6978450d240o&units=metric`;
 axios.get(forecastApi).then(displayForecast);
}

// timestamp is a Unix timestamp, represents time as the number of secs that have passed
//  since January 1, 1970 (also known as the Unix epoch).
// * 1000 to convert to msecs- the date object in JS uses msecs.

 function formatDay(timestamp){
  let date = new Date(timestamp * 1000);
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

  return days[date.getDay()];
}

function displayForecast(response) {

  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
 if (index < 6) {
  forecastHtml += //this is the same as forecast = forecast + 
  `<div class="forecast-wrapper">
  <div class="forecast-day">${formatDay(day.time)}</div>
  <div class="forecast-img"><img src="${day.condition.icon_url}"></div>
  <div class="forecast-min-temp">Min: ${Math.round(day.temperature.minimum)} °C</div>
  <div class="forecast-max-temp">Max: ${Math.round(day.temperature.maximum)} °C</div>
 </div>
  `;
    }
 });

 let forecast = document.querySelector("#forecast");
 forecast.innerHTML = forecastHtml;
 
}


//revisit - add default (current location)
//error handling
//switch themes
//rebuild from scratch- github commits
//add readme
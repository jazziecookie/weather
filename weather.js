
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", changeCity);

function changeCity(inputFromSearchForm){
inputFromSearchForm.preventDefault();
   let cityInput = document.querySelector(".city-input");
   city = cityInput.value;
   let displayCity = document.querySelector(".display-city");
   displayCity.innerHTML = `${city}`;
   console.log(city);
   fetchApi(city);
}

function fetchApi(city){
 let api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ff3f6c762d03ea64t3ab6978450d240o&units=metric`;

 axios.get(api).then(displayData);}

 function displayData(city){

   let displayCurrentTemperature = document.querySelector(".display-current-temperature");
   displayCurrentTemperature.innerHTML = `${city.data.temperature.current}`;

   let displayFeelsLikeTemperature = document.querySelector(".display-feels-like-temperature");
   displayFeelsLikeTemperature.innerHTML = `${city.data.temperature.feels_like}`;

   let displayCurrentDescription = document.querySelector(".display-current-description");
   displayCurrentDescription.innerHTML = `${city.data.condition.description}`;

   let displayCurrentIcon = document.querySelector(".display-current-icon");
   displayCurrentIcon.innerHTML = `<img src="${city.data.condition.icon_url}">`;

   let displayWindSpeed = document.querySelector(".display-wind-speed");
   displayWindSpeed.innerHTML = `${city.data.wind.speed} metres/second`;

   let displayHumidity = document.querySelector(".display-humidity");
   displayHumidity.innerHTML = `${city.data.temperature.humidity}%`;

 }


  
//⏰Feature #1
let currentTime = new Date();
let time = document.querySelector("#timeDiv");
let Days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = Days[currentTime.getDay()];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
time.innerHTML = `${day} ${hours}:${minutes}`;

//🕵️‍♀️Feature #2
function showTemp(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let weatherTemp = document.querySelector("#temp");
  let description = response.data.weather[0].description;
  let weatherDescription = document.querySelector("#descriptionDiv");
  let humidityValue = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let windValue = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = windValue;
  humidityValue.innerHTML = response.data.main.humidity;
  weatherTemp.innerHTML = temperature;
  weatherDescription.innerHTML = description;
}
function searchCity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-form").value;
  searchCity(city);
}

let submitForm = document.querySelector("#search-form");
submitForm.addEventListener("submit", search);

//Current LOcation Button
function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function currentTemp() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
let button = document.querySelector("#current-location");
button.addEventListener("click", currentTemp);

searchCity("lagos");

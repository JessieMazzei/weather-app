let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDayTime = document.querySelector("#current-day-time");
let day = days[dayIndex];
currentDayTime.innerHTML = `${day} ${hours}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
  let city = document.querySelector("#city-search").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayWeather);
}

function displayWeather(response) {
  document.querySelector("#temp-change").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;

  document.querySelector("#city-name").innerHTML = `${response.data.name}`;
}

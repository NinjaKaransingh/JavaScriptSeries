let cityName = "";
const temp = document.querySelector(".temp");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");
const weatherIconLink = "https://openweathermap.org/img/wn/";
const error = document.querySelector(".error");
debugger;
const apiKey = "facd099e5fa4e592e4668c590b163f8b";
const URL = https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric;
const checkWeather = async (city) => {
debugger;
const response = await fetch(URL + &q=${city});
if (response.status === 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
} else {
var data = await response.json();
document.querySelector(".city").innerText = data.name;
document.querySelector(".temp").innerText =
Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerText = data.main.humidity + "%";
document.querySelector(".wind").innerText = data.wind.speed + "km/h";
document.querySelector(".error").style.display = "none";
document.querySelector(".weather").style.display = "block";
if (data.weather[0].main === "Clouds") {
weatherIcon.src = weatherIconLink + 02d@2x.png;
} else if (data.weather[0].main === "Clear") {
weatherIcon.src = weatherIconLink + 01d@2x.png;
} else if (data.weather[0].main === "Rain") {
weatherIcon.src = weatherIconLink + 10d@2x.png;
} else if (data.weather[0].main === "Drizzle") {
weatherIcon.src = weatherIconLink + 09d@2x.png;
} else if (
data.weather[0].main === "Mist" ||
data.weather[0].main === "Smoke"
) {
weatherIcon.src = weatherIconLink + 50d@2x.png;
} else if (data.weather[0].main === "Snow") {
weatherIcon.src = weatherIconLink + 13d@2x.png;
}
}
};
btn.addEventListener("click", () => {
cityName = document.querySelector(".search input").value;
if (cityName !== "") {
checkWeather(cityName);
}
});

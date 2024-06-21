const city = "Islamabad";
const countryCode = "pk";
const unit = "metric";
const appId = "";

const temperature =document.getElementById("temp");
const cityEle =document.getElementById("city");
const weatherEle =document.getElementById("weather");
const max =document.getElementById("max");
const min =document.getElementById("min");

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=${unit}&APPID=${appId}`
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const {name, weather, main} = data;
    cityEle.innerHTML = name;
    temperature.innerHTML = main.temp + '°';
    weatherEle.innerHTML = weather[0].description;
    max.innerHTML = main.temp_max;
    min.innerHTML = main.temp_min;
  });

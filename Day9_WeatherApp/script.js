const cityname_input = document.getElementById("search_box");
const name = document.querySelector(".city_name");
const country = document.querySelector(".country");
const time_box = document.getElementById("time_box");
const temperature = document.querySelector(".temp");
const weather_description = document.querySelector(".weather_description");
const visibility = document.querySelector(".visibility");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weather_box = document.querySelector(".weather_box");
const body = document.querySelector("body");
const APIKey = "40342a6e369dd58a5eeb31e816b3b991";
var cityname = "Ha Noi";

// Call API
async function getData(cityname = "Ha Noi") {
  let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`).then(res => res.json());
  let temp = Math.floor(data.main.temp - 273.15)
  name.innerText = data.name;
  country.innerText = data.sys.country;
  temperature.innerText = temp;
  weather_description.innerText = data.weather[0].main;
  visibility.lastElementChild.innerText = data.visibility;
  wind.lastElementChild.innerText = data.wind.speed;
  humidity.lastElementChild.innerText = data.main.humidity;
  if (temp < 10 ){
    body.className = "cold";
  }
  else if (10 <temp < 20){
    body.className = "cool";
  }
  else if (20 <temp < 30){
    body.className = "warm";
  }
  else{
    body.className = "hot";
  }
}

getData();
document.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    cityname = cityname_input.value;
    getData(cityname);
  }
})


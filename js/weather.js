const API_KEY = "117ebfd9599c5847a0e889f0e8648839";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather-box span:first-child");
      const temp = document.querySelector("#weather-box span:nth-child(2)");
      const city = document.querySelector("#weather-box span:last-child");
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}°C`;
      city.innerText = data.name;
    });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
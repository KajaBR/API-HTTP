const api_key = "fa3a0c16c26152fa8d838e9e458ed309";
const endpoint = "api.openweathermap.org/data/2.5/weather?q=Warsaw&units=metric&lang=pl&appid=" + api_key;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data); // wyświetlenie danych w konsoli
    const city = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = "openweathermap.org/img/w" + data.weather[0].icon + ".png";

    // wstawienie danych do elementu HTML
    document.getElementById("city").textContent = city;
    document.getElementById("temp").textContent = temp + " °C";
    document.getElementById("desc").textContent = desc;
    document.getElementById("icon").src = icon;
  })
  .catch(error => console.error(error));
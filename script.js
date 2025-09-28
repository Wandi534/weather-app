function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "o8faab49263069t870a2fa38610252b5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl)
        .then(refreshWeather)
        .catch(function(error) {
            console.error("API request failed:", error);
            alert("Weather data could not be loaded. Check the console for details.");
        });
}

function handleSearchSubmit(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
// API: https://www.weatherbit.io/api/weather-current

const API_KEY = "08912b2f51ce4e7faaa0b047cd684a75";

async function getWeatherData(lat, lon) {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    console.log(data);
}

getWeatherData(38.123, -78.543);

getWeatherData(40.7309, -73.9973);
// API: https://www.weatherbit.io/api/weather-current

const API_KEY = "08912b2f51ce4e7faaa0b047cd684a75";

async function getWeatherData(lat, lon) {
    const storedWeatherData = localStorage.getItem(`weather_data_${lat}-${lon}`);
    const storedWeatherDataExpirationDate = localStorage.getItem(`weather_data_expiration_${lat}-${lon}`);
    const currentTime = new Date();
    console.log(storedWeatherDataExpirationDate, currentTime.getTime());
    if (storedWeatherData && storedWeatherDataExpirationDate > currentTime.getTime()) {
        console.log('stored information', storedWeatherData);
    } else {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        console.log("new api call", data);
        localStorage.setItem(`weather_data_${lat}-${lon}`, JSON.stringify(data));
        const currentDate = new Date();
        const expirationDate = currentDate.getTime() + (60 * 5 * 1000);
        localStorage.setItem(`weather_data_expiration_${lat}-${lon}`, expirationDate);
    }
    
}

getWeatherData(38.123, -78.543);

getWeatherData(40.7309, -73.9973);
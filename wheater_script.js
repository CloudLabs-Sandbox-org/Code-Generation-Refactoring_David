async function getWeather(city, apiKey) {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`; // Cambia "metric" a "imperial" para Fahrenheit

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extraer información relevante
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        console.log(`Weather in ${cityName}:`);
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Description: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}`);
    } catch (error) {
        console.error(`Error fetching weather data: ${error.message}`);
    }
}

// Reemplaza con tu clave de API de OpenWeatherMap
const API_KEY = "f14a0ca5c7a31440e709d1677124c38e";
const city = "London";
getWeather(city, API_KEY);
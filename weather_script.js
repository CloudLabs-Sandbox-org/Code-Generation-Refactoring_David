const axios = require('axios');

async function getWeather(city, apiKey) {
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather`;
    const params = {
        q: city,
        appid: apiKey,
        units: 'metric'
    };

    try {
        const response = await axios.get(baseUrl, { params });
        return response.data;
    } catch (error) {
        if (error.response) {
            return { error: error.response.data.message };
        } else {
            return { error: error.message };
        }
    }
}

async function main() {
    const apiKey = "your_api_key_here";
    const city = process.argv[2];

    if (!city) {
        console.log("Please provide a city name");
        return;
    }

    const weatherData = await getWeather(city, apiKey);

    if (weatherData.error) {
        console.log("Error:", weatherData.error);
    } else {
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Weather: ${weatherData.weather[0].description}`);
    }
}

main();
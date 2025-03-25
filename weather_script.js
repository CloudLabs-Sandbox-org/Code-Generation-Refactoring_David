// Replace with your preferred weather API and API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3a9567149b9ba06b62251564ce5a7c07';

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error.message);
    }
}

// Function to display weather data
function displayWeather(data) {
    console.log(`Weather in ${data.name}, ${data.sys.country}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Weather: ${data.weather[0].description}`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Wind Speed: ${data.wind.speed} m/s`);
}

// Example usage
const city = 'Buenos Aires'; // Replace with your desired city
getWeather(city);

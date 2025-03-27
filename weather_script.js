const apiKey = "f14a0ca5c7a31440e709d1677124c38e"; // Reemplaza con tu clave de API de OpenWeatherMap
const city = "Madrid"; // Cambia por la ciudad que desees consultar

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`El clima en ${data.name}:`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Humedad: ${data.main.humidity}%`);
        console.log(`Descripción: ${data.weather[0].description}`);
    } catch (error) {
        console.error("Error al obtener los datos meteorológicos:", error.message);
    }
}

// Llama a la función para obtener los datos meteorológicos
getWeather();
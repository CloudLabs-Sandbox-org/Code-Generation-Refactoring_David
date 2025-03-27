import requests

def get_weather(city, api_key):
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"  # Cambia a "imperial" para Fahrenheit
    }

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()  # Lanza una excepción si la respuesta tiene un error HTTP
        data = response.json()

        # Extraer información relevante
        city_name = data["name"]
        temperature = data["main"]["temp"]
        weather_description = data["weather"][0]["description"]

        print(f"Weather in {city_name}:")
        print(f"Temperature: {temperature}°C")
        print(f"Description: {weather_description.capitalize()}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
    except KeyError:
        print("Error: Unable to parse weather data. Please check the city name or API key.")

if __name__ == "__main__":
    # Reemplaza con tu clave de API de OpenWeatherMap
    API_KEY = "f14a0ca5c7a31440e709d1677124c38e"
    city = input("London")
    get_weather(city, API_KEY)
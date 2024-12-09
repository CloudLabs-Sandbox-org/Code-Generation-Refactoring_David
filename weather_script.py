import requests

def get_weather(city, api_key):
    base_url = "http://api.openweathermap.org/data/2.5/weather"
    params = {
        'q': city,
        'appid': api_key,
        'units': 'metric'
    }
    response = requests.get(base_url, params=params)
    return response.json()

def main():
    api_key = "your_api_key_here"
    city = input("Enter city name: ")
    weather_data = get_weather(city, api_key)
    
    if weather_data.get("cod") != 200:
        print("Error:", weather_data.get("message"))
    else:
        print(f"City: {weather_data['name']}")
        print(f"Temperature: {weather_data['main']['temp']}°C")
        print(f"Weather: {weather_data['weather'][0]['description']}")

if __name__ == "__main__":
    main()
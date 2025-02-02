Weather App

A simple Weather App built using Node.js and Express. It allows users to get weather information for any city by querying the OpenWeatherMap API.

Features

Fetch weather data for any city.
Provides weather description, temperature (Celsius), humidity, and wind speed.
Handles errors gracefully for invalid cities.
Uses environment variables for secure storage of the OpenWeatherMap API key.

Backend (API)
Express Server:
The backend is built using Node.js and Express, which handles HTTP requests and fetches weather data from the OpenWeatherMap API.

API Request:
The backend exposes a GET endpoint /weather where you can provide a city name as a query parameter.

Example Request:

http://localhost:5000/weather?city=CityName
The backend fetches data from the OpenWeatherMap API and returns weather details in JSON format. The details include:

Weather description (e.g., clear sky, cloudy)

Temperature (in Celsius)

Humidity

Wind speed


Error Handling
If an invalid city is provided or an error occurs while fetching weather data, the server will respond with a 500 status code and an error message:

"City not found!"


![1](https://github.com/user-attachments/assets/1cc563eb-f232-4f03-8b40-bf5af37b4454)
![2](https://github.com/user-attachments/assets/4b7da336-7de9-4379-9c4c-34c3bd8609ef)
![3](https://github.com/user-attachments/assets/75420e3b-c4fa-4ce2-be10-63efb6ddb778)


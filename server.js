// Required packages
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();  // This will load environment variables from the .env file

const app = express();
app.use(cors());  // Enables Cross-Origin Resource Sharing (CORS)

const PORT = process.env.PORT || 5000;  // Default port is 5000 or custom port
const API_KEY = process.env.OPENWEATHER_API_KEY;  // Fetch API key from .env file

// API endpoint for fetching weather data
app.get("/weather", async (req, res) => {
  const city = req.query.city || "Lahore";  // Default city is Lahore if no city is provided in query

  try {
    // Make request to OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`  // Metric for Celsius temperature
    );

    // Send weather data as JSON response
    res.json({
      city: city,
      weather: response.data.weather[0].description,  // Weather description (e.g., sunny, cloudy)
      temperature: response.data.main.temp,  // Temperature in Celsius
      humidity: response.data.main.humidity,  // Humidity percentage
      wind_speed: response.data.wind.speed,  // Wind speed in km/h
    });
  } catch (error) {
    res.status(500).json({ error: "City not found!" });  // Error message if city not found
  }
});

// Start server and listen on defined port
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});

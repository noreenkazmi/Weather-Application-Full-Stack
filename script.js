
// Fetch the weather data when the user clicks the button
async function getWeather() {
  const city = document.getElementById('cityInput').value;  // Get the city input
  const weatherInfo = document.getElementById('weatherInfo');  // Where to display weather info
  const error = document.getElementById('error');  // Where to display error messages

  if (!city) {
    error.textContent = "Please enter a city!";
    weatherInfo.innerHTML = '';
    return;
  }

  error.textContent = '';  // Clear any previous error messages

  try {
    const apiKey = '997bf5f0b2dfa841a2ebb3f24e25013a';  // Your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch data from OpenWeatherMap API
    const response = await fetch(url);
    const data = await response.json();

    // Check if the city is found
    if (data.cod === '404') {
      error.textContent = "City not found!";
      weatherInfo.innerHTML = '';
    } else {
      // Display the weather data
      weatherInfo.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    // If there is an error fetching data
    error.textContent = "Error fetching weather data!";
    weatherInfo.innerHTML = '';
  }
}

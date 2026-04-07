function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather || !weather.wind) {
    return null
  }

  const description = weather.weather[0]?.description || 'N/A'
  const weatherMain = weather.weather[0]?.main?.toLowerCase() || ''

  const getWeatherIcon = (condition) => {
    if (condition.includes('clear')) return '☀️'
    if (condition.includes('cloud')) return '☁️'
    if (condition.includes('rain') || condition.includes('drizzle')) return '🌧️'
    if (condition.includes('thunderstorm')) return '⛈️'
    if (condition.includes('snow')) return '❄️'
    if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) return '🌫️'
    return '🌤️'
  }

  return (
    <section className="weather-card">
      <h2>
        {weather.name} <span className="weather-icon">{getWeatherIcon(weatherMain)}</span>
      </h2>
      <p>Temperature: {Math.round(weather.main.temp)}°C</p>
      <p>Description: {description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </section>
  )
}

export default WeatherCard

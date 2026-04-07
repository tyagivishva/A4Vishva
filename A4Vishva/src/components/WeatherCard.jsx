function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather || !weather.wind) {
    return null
  }

  const description = weather.weather[0]?.description || 'N/A'

  return (
    <section className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temperature: {Math.round(weather.main.temp)}°C</p>
      <p>Description: {description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </section>
  )
}

export default WeatherCard

function ForecastList({ forecastItems }) {
  if (!forecastItems || forecastItems.length === 0) {
    return null
  }

  const noonItems = forecastItems.filter((item) => item.dt_txt.includes('12:00:00'))
  const dailyItems = (noonItems.length > 0 ? noonItems : forecastItems).slice(0, 5)

  const getWeatherIcon = (condition) => {
    const value = condition?.toLowerCase() || ''

    if (value.includes('clear')) return '☀️'
    if (value.includes('cloud')) return '☁️'
    if (value.includes('rain') || value.includes('drizzle')) return '🌧️'
    if (value.includes('thunderstorm')) return '⛈️'
    if (value.includes('snow')) return '❄️'
    if (value.includes('mist') || value.includes('fog') || value.includes('haze')) return '🌫️'
    return '🌤️'
  }

  return (
    <section className="forecast-list">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyItems.map((item) => (
          <article className="forecast-item" key={item.dt}>
            <p className="forecast-date">
              {new Date(item.dt_txt).toLocaleDateString('en-CA', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
              <span className="forecast-icon"> {getWeatherIcon(item.weather[0]?.main)}</span>
            </p>
            <p>{Math.round(item.main.temp)}°C</p>
            <p>{item.weather[0].description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ForecastList

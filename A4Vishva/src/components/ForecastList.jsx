function ForecastList({ forecastItems }) {
  if (!forecastItems || forecastItems.length === 0) {
    return null
  }

  const dailyItems = forecastItems.filter((item) => item.dt_txt.includes('12:00:00')).slice(0, 5)

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

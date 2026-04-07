function ForecastList({ forecastItems }) {
  if (!forecastItems || forecastItems.length === 0) {
    return null
  }

  return (
    <section className="forecast-list">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecastItems.map((item) => (
          <article className="forecast-item" key={item.dt}>
            <p>{item.dt_txt}</p>
            <p>{item.main.temp}°C</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ForecastList

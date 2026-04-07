import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()

    if (!city.trim()) {
      return
    }

    setError('')
    setLoading(false)
    setWeatherData(null)
    setForecastData([])
    setSearchCity(city.trim())
  }

  return (
    <main className="app">
      <h1>Weather App</h1>
      <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />
      <Loading show={loading} />
      <ErrorMessage message={error} />
      <WeatherCard weather={weatherData} />
      <ForecastList forecastItems={forecastData} />
      {!searchCity && <p className="message">Search for a city to see weather data.</p>}
    </main>
  )
}

export default App

import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

function App() {
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!searchCity) {
      return
    }

    const getCurrentWeather = async () => {
      setLoading(true)
      setError('')
      setWeatherData(null)
      setForecastData([])

      if (!API_KEY) {
        setError('Missing API key. Please add VITE_OPENWEATHER_API_KEY in .env file.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`,
        )

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'City not found. Please try another city.')
        }

        const data = await response.json()
        setWeatherData(data)

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`,
        )

        if (forecastResponse.ok) {
          const forecastJson = await forecastResponse.json()
          setForecastData(forecastJson.list)
        }
      } catch (fetchError) {
        setError(fetchError.message || 'Could not fetch weather data right now.')
      } finally {
        setLoading(false)
      }
    }

    getCurrentWeather()
  }, [searchCity])

  const handleSearch = (event) => {
    event.preventDefault()

    if (!city.trim()) {
      setError('Please enter a city name before searching.')
      return
    }

    setError('')
    setLoading(false)
    setWeatherData(null)
    setForecastData([])
    setHasSearched(true)
    setSearchCity(city.trim())
  }

  return (
    <main className="app">
      <h1>Weather App</h1>
      <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} isLoading={loading} />
      <Loading show={loading} />
      <ErrorMessage message={error} />
      <WeatherCard weather={weatherData} />
      <ForecastList forecastItems={forecastData} />
      {!hasSearched && <p className="message">Search for a city to see weather data.</p>}
      {hasSearched && !loading && !error && !weatherData && (
        <p className="message">No weather data available for this city.</p>
      )}
    </main>
  )
}

export default App

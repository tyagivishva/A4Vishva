import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Weather App</h1>
      <SearchBar />
      <Loading />
      <ErrorMessage />
      <WeatherCard />
      <ForecastList />
    </main>
  )
}

export default App

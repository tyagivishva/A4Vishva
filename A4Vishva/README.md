# PROG27545 - Assignment 4

## React Weather App

This project is a student-style weather app built with React and Vite.

### Features
- Search by city name
- Show current weather:
  - City name
  - Temperature
  - Description
  - Humidity
  - Wind speed
- Loading, error, and no-data states
- Bonus: 5-day forecast cards (rendered with `.map()`)

### Tech Used
- React (functional components)
- React Hooks (`useState`, `useEffect`)
- OpenWeather API

### Setup
1. Install dependencies:
	- `npm install`
2. Create a local environment file in the project root:
	- `.env`
3. Add your API key:
	- `VITE_OPENWEATHER_API_KEY=your_real_key`
4. Run app:
	- `npm run dev`

### API Endpoints Used
- Current weather:
  - `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_API_KEY&units=metric`
- Forecast:
  - `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid=YOUR_API_KEY&units=metric`

### Note
- Do not put real keys in `.env.example`.
- Keep real keys only in local `.env`.

function Loading({ show }) {
  if (!show) {
    return null
  }

  return <p className="message">Loading weather data...</p>
}

export default Loading

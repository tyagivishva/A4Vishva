function SearchBar({ city, onCityChange, onSearch }) {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => onCityChange(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar

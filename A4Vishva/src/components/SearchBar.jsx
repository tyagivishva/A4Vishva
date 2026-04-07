function SearchBar({ city, onCityChange, onSearch, isLoading }) {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        disabled={isLoading}
        onChange={(event) => onCityChange(event.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar

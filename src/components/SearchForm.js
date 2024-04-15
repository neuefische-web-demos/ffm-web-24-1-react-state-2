export default function SearchForm({ searchTerm, handleSearch }) {
  // let searchTerm = "";

  function handleSubmit(event) {
    event.preventDefault();
    //searchTerm = event.target.searchTerm.value;
    handleSearch(event.target.searchTerm.value);
    console.log("searchTerm: ", searchTerm);
  }

  return (
    <div style={{ border: "1px solid blue" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </div>
  );
}

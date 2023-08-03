import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?title=${query}`);
  };

  return (
    <form onSubmit={handleSearch} class="m-5">
      <h2>Search for books</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books by name"
        class="mt-3 text-center"
      />
      <button type="submit" class=" m-3">Search</button>
    </form>
  );
}

export default SearchBar;
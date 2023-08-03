import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar/>} />
        <Route exact path="/search" element={<SearchResults/>} />
        <Route exact path="/book/works/:bookId"  element={<BookDetails/>} />
      </Routes>
    </Router>

    // APIS:
    // searchResults : search - https://openlibrary.org/search.json?q={}
    // bookCard : image - https://covers.openlibrary.org/b/id/${bookData?.covers?.[0]}-L.jpg
    // singleBook - all data - https://openlibrary.org/works/${bookId}.json
    // singLeBook - specific author details from all data https://openlibrary.org${response?.data?.authors?.[0]?.author?.key}.json
    // singleBook - all works from a specific author https://openlibrary.org${response?.data?.authors?.[0]?.author?.key}/works.json
  );
}
export default App;
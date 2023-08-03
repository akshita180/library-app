import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import BookCard from './BookCard';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';

function SearchResults() {
  let [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  useEffect(() => {    
    axios.get(`https://openlibrary.org/search.json?q=${searchParams.get("title")}`)
    .then((response) => {
      setResults(response.data.docs);
      // result - book.key -> /works/ol82586w
      // result - book.cover_i -> 10110415
    });
  }, [searchParams]);

  if (!results.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>Search Results</h2>

      <div container="fluid">
      <div class="row">

        {results.slice(0,20).map(bookDetails => (
          <BookCard className="card"  book={bookDetails} key={bookDetails.key}/>
        )
        )}

      </div>
      </div>
      
      {/* <div>
        {results.slice(0,20).map(bookDetails => (
          <BookCard class="card" style="width: 18rem;" book={bookDetails} key={bookDetails.key}/>
        )
        )}
      </div> */}
    </div>
  );
}

export default SearchResults;
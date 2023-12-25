import React from "react";
import { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchmoviesHandler () {
     const response=await fetch("https://swapi.dev/api/films")
      const data=await response.json();
        const newMovies = data.results.map((item)=>{
          return {
            id: item.episode_id,
            title: item.title,
            releaseDate: item.release_date,
            openingText: item.opening_crawl,
          };
        })
      setMovies(newMovies);
    };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;

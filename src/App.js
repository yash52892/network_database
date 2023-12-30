import React, { useEffect } from "react";
import { useState } from "react";
import NewMovie from "./components/Newmovie";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchmoviesHandler= async ()=>{
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch("https://crudcrud.com/api/aef10c03450940c5802245c2ba763676/movies");
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }
      const data = await response.json();
      const newMovies = data.map((item) => {
        return {
          id: item._id,
          title: item.title,
          releaseDate: item.date,
          openingText: item.movie_text,
        };
      });
      setMovies(newMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  useEffect(()=>{
        fetchmoviesHandler();
      },[]);

  return (
    <React.Fragment>
      <NewMovie getMovies={fetchmoviesHandler}/>
      <section>
        <button onClick={fetchmoviesHandler}>Fetch Movies</button>
      </section>
      <section className="section">
        {isLoading && !error && <section className="loader"></section>}
        {!error && <MoviesList movies={movies} />}
        {error && <p>{error.message}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

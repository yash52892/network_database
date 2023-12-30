import React from "react";
import { useRef } from "react";

import classes from "./Newmovie.module.css";
const NewMovie = (props) => {
  const title = useRef(null);
  const date = useRef(null);
  const movie_text = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let movie_obj = {
      title: title.current.value,
      date: date.current.value,
      movie_text: movie_text.current.value,
    };
    try{
      fetch("https://crudcrud.com/api/aef10c03450940c5802245c2ba763676/movies", {
      method: "POST",
      body: JSON.stringify(movie_obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res)=>{
      if(res.ok){
        props.getMovies();
      }
      else
      throw new Error("Something went wrong");
    })
  }catch(error){
      console.log(error);
    }
    console.log(movie_obj);
  };
  return (
    <section className={classes.section}>
      <form onSubmit={handleSubmit}>
        <label className={classes.label}> Title </label>
        <input type="text" name="Title" ref={title} />
        <label className={classes.label}> Opening Text </label>
        <input type="text" name="Movie_openingText" ref={movie_text} />
        <label className={classes.label}> Release Date </label>
        <input type="date" name="Release_date" ref={date} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default NewMovie;

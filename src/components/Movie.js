import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
 let id=props.id;
  const handleDelete=async ()=>{
    
    let res=await fetch(`https://crudcrud.com/api/76261c11e1e5403093c6e493895a52a5/movies/`+id, {
      method: 'DELETE'
    }).then((res)=>{
      if(res.ok){
        props.getMovies();
      }
      else
      throw new Error("Something went wrong");
    })
    
  }
  
    return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button className={classes.delete} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Movie;

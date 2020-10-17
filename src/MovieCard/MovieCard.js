import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating.js';

import './MovieCard.css';


const MovieCard = ({ movie, userId }) => {
  return (
    <section className='movieCard'>
      <h1 className='cardTitle'>{movie.title}</h1>
      <h4>Average Rating: {parseFloat(movie.average_rating).toFixed(1)}</h4>
      <h4>{movie.userRating && `Your Rating: ${movie.userRating.rating}`}</h4>
      <h4>{!movie.userRating && userId && `Click to add rating`}</h4>
      <h4>{!movie.userRating && !userId && `Sign in to add your rating`}</h4>
      <Link to={`/${movie.id}`}>
        <img className='poster' src={movie.poster_path} alt={movie.title + ' movie poster'}/>
      </Link>
      <h5>Release Date: {movie.release_date}</h5>
    </section>
  )
}
export default MovieCard;

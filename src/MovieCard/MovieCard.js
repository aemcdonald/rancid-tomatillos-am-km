import React from 'react';
import './MovieCard.css';




const MovieCard = ({ movie, history }) => {
  return (
    <section className='movieCard' onClick={() => {
      history.push(`/${movie.id}`)}}>
      <h1 className='cardTitle'>{movie.title}</h1>
      <h4>Average Rating: {parseFloat(movie.average_rating).toFixed(1)}</h4>
      <h4>{movie.userRating && `Your Rating: ${movie.userRating.rating}`}</h4>
      <img className='poster' src={movie.poster_path} alt={movie.title + ' movie poster'}/>
      <h5>Release Date: {movie.release_date}</h5>
    </section>
  )
}
export default MovieCard;

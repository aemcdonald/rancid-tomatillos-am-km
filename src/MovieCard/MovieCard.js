import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, avgRating, photo, releaseDate, history, movieId }) => {
  return (
    <section className='movieCard' onClick={() => {
      history.push(`/${movieId}`)}}>
      <h1 className='cardTitle'>{title}</h1>
      <h4>Average Rating: {parseFloat(avgRating).toFixed(1)}</h4>
      <img className='poster' src={photo} alt={title + ' movie poster'}/>
      <h5>Release Date: {releaseDate}</h5>
    </section>
  )
}
export default MovieCard;

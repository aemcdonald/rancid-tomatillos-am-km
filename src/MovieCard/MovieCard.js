import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, avgRating, photo, releaseDate, history, movieId }) => {
  return (
    <section className='movieCard' onClick={() => {
      console.log("oh haaay");
      history.push(`/${movieId}`)}}>
      <h3>{title}</h3>
      <h4>Average Rating: {avgRating}</h4>
      <img className='poster' src={photo} alt={title} movie poster/>
      <h5>Release Date: {releaseDate}</h5>
    </section>
  )
}
export default MovieCard;

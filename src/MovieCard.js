import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, avgRating, photo, releaseDate }) => {
  return (
    <section className='movieCard'>
      <h3>Title: {title}</h3>
      <h4>Average Rating: {avgRating}</h4>
      <img src={photo} alt={title} movie poster/>
      <h5>Release Date: {releaseDate}</h5>
    </section>
  )
}
export default MovieCard;

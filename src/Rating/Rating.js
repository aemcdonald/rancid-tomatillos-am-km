import React from 'react';
import PropTypes from 'prop-types';
import ApiCalls from '../ApiCalls.js';
import ReactStars from "react-rating-stars-component";
import './Rating.css';

const Rating = (props) => {
  return (
    <section>
      <h2>{props.userRating ? `Your Rating: ${props.userRating}` : 'Not yet rated'}</h2>
      <h4>Add a rating:</h4>
      <section className="starsWrapper">
        <ReactStars
          classNames="stars"
          value={props.userRating}
          id="movieViewStars"
          count={10}
          onChange={props.addRating}
          size={24}
          activeColor="#ffd700"
        />
      </section>
    </section>
  )
}

export default Rating;

Rating.propTypes = {
  userRating: PropTypes.number,
  addRating: PropTypes.func
};

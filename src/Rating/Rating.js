import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
import ReactStars from "react-rating-stars-component";
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.userRating,
      rated: this.props.rated,
      currentUser: this.props.currentUser
    }
  }
  handleUserInput = async (rating) => {
     const ratingInfo = { movie_id: this.props.currentMovie.id, rating: rating }
     const updatedRating = await ApiCalls.postNewRating(this.state.currentUser, ratingInfo)
     this.props.updateRating(this.props.currentMovie.id)
     this.setState({rating: {rating: rating}})
  }

  render() {
    return (
      <section>
        <h2>{this.state.rated && `Your Rating: ${this.state.rating.rating}`}</h2>
        <h4>Add a rating:</h4>
        <section className="starsWrapper">
        <ReactStars
          classNames="stars"
          value={this.state.rated && this.state.rating.rating}
          id="movieViewStars"
          count={10}
          onChange={this.handleUserInput}
          size={24}
          activeColor="#ffd700"
        />
        </section>
      </section>
    )
  }
}
export default Rating;

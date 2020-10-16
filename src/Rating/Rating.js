import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
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
  handleUserInput = async (event) => {
    const newRating = parseInt(event.target.value)
    const ratingInfo = { movie_id: this.props.currentMovie.id, rating: newRating }
    const updatedRating = await ApiCalls.postNewRating(this.state.currentUser, ratingInfo)
    this.props.updateRating(this.props.currentMovie.id)
    this.setState({rating: {rating: newRating}})
  }

  render() {
    return (
      <section>
        <h2>{this.state.rated && `Your Rating: ${this.state.rating.rating}`}</h2>
        <h4>Add a rating:</h4>
        <input onChange={this.handleUserInput} type="number" min="1" max="10"></input>
      </section>
    )
  }
}
export default Rating;
// value={this.state.gender} onChange={this.handleChange}
// <h4>{movie.userRating && `Your Rating: ${movie.userRating.rating}`}</h4>
// <h4>{!movie.userRating && userId && `Click to add rating`}</h4>
// <h4>{!movie.userRating && !userId && `Sign in to add your rating`}</h4>

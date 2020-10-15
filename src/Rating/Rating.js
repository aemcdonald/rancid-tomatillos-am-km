import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.userRating,
      rated: this.props.rated
    }
  }
  updateUserRating = (event) => {
    console.log("updateUserRating");
  }
  handleUserInput = (newRating) => {
    console.log("handleUserInput")
  }
  render() {
    console.log("renderrate", this.state);
    return (
      <section>
        <h2>{this.state.rated && `Your Rating: ${this.state.rating.rating}`}</h2>
        <h4>Add a rating:</h4>
        <input onChange={this.updateUserRating} value={1} type="number" min="1" max="10"></input>
      </section>
    )
  }
}
export default Rating;
// value={this.state.gender} onChange={this.handleChange}
// <h4>{movie.userRating && `Your Rating: ${movie.userRating.rating}`}</h4>
// <h4>{!movie.userRating && userId && `Click to add rating`}</h4>
// <h4>{!movie.userRating && !userId && `Sign in to add your rating`}</h4>

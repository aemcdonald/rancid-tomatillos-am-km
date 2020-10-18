import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard.js';
import ApiCalls from '../ApiCalls.js';
import './MovieGrid.css';

class MovieGrid extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const allMovies = await ApiCalls.getAllMovies()
    if(this.props.currentUserId) {
      let userRatings = await ApiCalls.getUserRatings(this.props.currentUserId)
      userRatings.ratings.forEach((rating) => {
        let foundMovie = allMovies.movies.find(movie => movie.id === rating.movie_id)
        foundMovie.userRating = rating
      })
    }
    if (allMovies.movies) {
      this.setState({movies: allMovies.movies})
    } else {
      this.setState({error: allMovies.error})
    }
  }

  render() {
    const movieCards = this.state.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          movie={movie}
          userId={this.props.currentUserId}
        />
      )
    })
    return (
      <div className='movies-container'>
        {movieCards.length ? movieCards : this.state.error}
      </div>
    )
  }
}
export default MovieGrid;

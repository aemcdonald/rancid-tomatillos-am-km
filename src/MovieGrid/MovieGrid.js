import React, { Component } from 'react';
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
    this.setState({movies: allMovies.movies})
  }

  render() {
    console.log(this.state.movies);
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
        {movieCards}
      </div>
    )
  }
}
export default MovieGrid;

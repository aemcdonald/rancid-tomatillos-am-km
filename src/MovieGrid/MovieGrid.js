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

  componentDidMount = () => {
    ApiCalls.getAllMovies()
    .then(data => {console.log(data)
    this.setState({movies: data.movies})
    })
  }

  render() {
    const movieCards = this.state.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          avgRating={movie.average_rating}
          title={movie.title}
          photo={movie.poster_path}
          releaseDate={movie.release_date}
          history={this.props.history}
          movieId={movie.id}
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

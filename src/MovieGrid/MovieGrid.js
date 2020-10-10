import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import './MovieGrid.css';

class MovieGrid extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(error => console.log(error.message))
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

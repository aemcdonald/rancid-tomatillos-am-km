import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js'
import './MovieView.css';

class MovieView extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    }
  }
  async componentDidMount() {
    const movie = await ApiCalls.getSingleMovie(this.props.match.params.movieId)
    this.setState({movie: movie.movie})
  }
  render() {
    return (
      <section className='movieView'>
        <h1>{this.state.movie.title}</h1>
        <img className='poster' src={this.state.movie.backdrop_path} alt={this.state.movie.title} movie poster/>
        <h4>{this.state.movie.overview}</h4>
        <h5>Release Date: {this.state.movie.release_date}</h5>
        <h6>Averge Rating: {this.state.movie.average_rating}</h6>
      </section>
    )
  }
}

export default MovieView;

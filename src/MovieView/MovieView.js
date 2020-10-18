import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiCalls from '../ApiCalls.js'
import Rating from '../Rating/Rating.js';
import './MovieView.css';

class MovieView extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      userRating: {},
      hasRating: false
    }
  }
  getUserRating = async (singleMovieId) => {
    const userRatings = await ApiCalls.getUserRatings(this.props.currentUserId)
    if(userRatings.ratings) {
      const rating = userRatings.ratings.find(rating => rating.movie_id === singleMovieId)
      rating && this.setState({userRating: rating, hasRating: true})
    }
  }
  async componentDidMount() {
    const singleMovieInfo = await ApiCalls.getSingleMovie(this.props.match.params.movieId)
    this.getUserRating(singleMovieInfo.movie.id)
    this.setState({movie: singleMovieInfo.movie})
  }
  render() {
    return (
      <section className='movieView' style={{backgroundImage: 'url(' + this.state.movie.backdrop_path + ')' }}>
        <section className='movieInfo'>
          <h3 className='movieTitle'>{this.state.movie.title}</h3>
          <h4 className='movieTagline'>{this.state.movie.tagline}</h4>
          <h4 className='movieOverview'>{this.state.movie.overview}</h4>
          <h5>Release Date: {this.state.movie.release_date}</h5>
          {this.state.hasRating && <Rating updateRating={this.getUserRating} currentUser={this.props.currentUserId} userRating={this.state.userRating} rated={true} currentMovie={this.state.movie}/>}
          {!this.state.hasRating && <Rating updateRating={this.getUserRating} currentUser={this.props.currentUserId} rated={false} currentMovie={this.state.movie}/>}
          <h6>Average Rating: {parseFloat(this.state.movie.average_rating).toFixed(1)}</h6>
        </section>
      </section>
    )
  }
}

export default MovieView;

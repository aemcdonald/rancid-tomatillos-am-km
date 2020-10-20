import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiCalls from '../ApiCalls.js'
import Rating from '../Rating/Rating.js';
import Comments from '../Comments/Comments.js';
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
    const userRatings = await ApiCalls.getUserRatings(this.props.currentUserId.id)
    if(userRatings.ratings) {
      const rating = userRatings.ratings.find(rating => rating.movie_id === singleMovieId)
      rating && this.setState({userRating: rating, hasRating: true})
    }
  }

  async componentDidMount() {
    const singleMovieInfo = await ApiCalls.getSingleMovie(this.props.match.params.movieId)
    if (this.props.currentUserId) {
      this.getUserRating(singleMovieInfo.movie.id)
    }
    this.setState({movie: singleMovieInfo.movie})
  }

  handleUserInput = async (rating) => {
    const ratingInfo = { movie_id: this.state.movie.id, rating: rating }
    if (this.state.hasRating) {
      await ApiCalls.changeRating(this.props.currentUserId, this.state.userRating.id)
    }
    await ApiCalls.postNewRating(this.props.currentUserId, ratingInfo)
    this.getUserRating(this.state.movie.id)
  }

  render() {
    return (
      <section className='movieView' style={{backgroundImage: 'url(' + this.state.movie.backdrop_path + ')' }}>
        <section className='movieInfo'>
        <h3 className='movieTitle'>{this.state.movie.title}</h3>
        <h4 className='movieTagline'>{this.state.movie.tagline}</h4>
        <h4 className='movieOverview'>{this.state.movie.overview}</h4>
        <h5>Release Date: {this.state.movie.release_date}</h5>
        <h4>{!this.props.currentUserId && 'Sign in to rate this movie!'}</h4>
        {this.props.currentUserId && this.state.hasRating && <Rating userRating={this.state.userRating.rating} addRating={this.handleUserInput}/>}
        {this.props.currentUserId && !this.state.hasRating && <Rating addRating={this.handleUserInput}/>}
        <h6>Average Rating: {parseFloat(this.state.movie.average_rating).toFixed(1)}</h6>
        <Comments />
      </section>
    </section>
    )
  }
}

export default MovieView;

MovieView.propTypes = {
  currentUserId: PropTypes.number
};

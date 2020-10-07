import React, { Component } from 'react';
import './MovieGrid.css'

class MovieGrid extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  render() {
    return (
      <div className='movies-container'>
        {this.state.movies.forEach(movie => {
          <Card movie={movie}/>
        })}
      </div>
    )
  }
}
export default MovieGrid;

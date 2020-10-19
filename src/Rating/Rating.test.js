import React from 'react';
import ReactDOM from 'react-dom';
import ApiCalls from '../ApiCalls.js';
import Rating from './Rating.js';
import MovieView from '../MovieView/MovieView.js';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../ApiCalls');

describe('Rating', () => {
  it('should display a user\'s rating if the movie is rated', async () => {
    const mockProps = {match: {params: {movieId: 1234}}}
    ApiCalls.getSingleMovie.mockResolvedValue(
      { movie: {average_rating: 6, id: 1234, title: "Mulan"}}
    )
    ApiCalls.getUserRatings.mockResolvedValueOnce(
      { ratings: [
        {id: 2939, user_id: 88, movie_id: 5678, rating: 10},
        {id: 2130, user_id: 88, movie_id: 1234, rating: 5}
      ]}
    )

    render(
      <BrowserRouter>
        <MovieView {...mockProps} currentUserId={88}/>
      </BrowserRouter>
    );

    const rating = await waitFor(() => screen.getByText('Your Rating: 5'))

    expect(rating).toBeInTheDocument();
  })

  // display
    //show 10 stars
    //should fill the correct number of stars??

  // logged in
      //rated movie: Your rating 88832893298329
      //not rated movie: Not yet rated
      //add rating
      //edit rating

  //SAD PATH
  //not logged in:
    //we should test this on movieview
})

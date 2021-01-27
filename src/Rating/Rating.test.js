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
    const mockUser = { email: 'sam@turing.io', id: 88, name: 'Sam' }

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
        <MovieView {...mockProps} currentUser={mockUser}/>
      </BrowserRouter>
    );

    const rating = await waitFor(() => screen.getByText('Your Rating: 5'))

    expect(rating).toBeInTheDocument();
  });

  it('should display a not rated message if the movie is not rated', async () => {
    const mockProps = {match: {params: {movieId: 1234}}}
    const mockUser = { email: 'sam@turing.io', id: 88, name: 'Sam' }

    ApiCalls.getSingleMovie.mockResolvedValue(
      { movie: {average_rating: 6, id: 1234, title: "Mulan"}}
    )
    ApiCalls.getUserRatings.mockResolvedValueOnce(
      { ratings: [
        {id: 2939, user_id: 88, movie_id: 5678, rating: 10},
        {id: 2130, user_id: 88, movie_id: 9876, rating: 5}
      ]}
    )

    render(
      <BrowserRouter>
        <MovieView {...mockProps} currentUser={mockUser}/>
      </BrowserRouter>
    );   

    const ratingMessage = await waitFor(() => screen.getByText('Not yet rated'))

    expect(ratingMessage).toBeInTheDocument();
  });

   it('should fire a given function when a user rates a movie', async () => {
     const fakeFunction = jest.fn();

    render(
      <Rating addRating={fakeFunction} />
    )

    const ratingMessage = await waitFor(() => screen.getByText('Not yet rated'))
    expect(ratingMessage).toBeInTheDocument();

    const star = screen.getAllByText('★')[6]

    userEvent.click(star)
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });

  it('should allow a user to edit an existing rating', async () => {
    const mockProps = { match: { params: { movieId: 1234 } } }
    const mockUser = { email: 'sam@turing.io', id: 88, name: 'Sam' }
    
    ApiCalls.getSingleMovie.mockResolvedValueOnce(
      { movie: { average_rating: 6, id: 1234, title: "Mulan" } }
    )
    .mockResolvedValueOnce(
      { movie: { average_rating: 6, id: 1234, title: "Mulan" } }
    )
    ApiCalls.getUserRatings.mockResolvedValueOnce(
      { ratings: [
        { id: 2939, user_id: 88, movie_id: 5678, rating: 10 },
        { id: 2130, user_id: 88, movie_id: 1234, rating: 5 }
      ]}
    )
    .mockResolvedValueOnce(
      { ratings: [
        { id: 2939, user_id: 88, movie_id: 5678, rating: 10 },
        { id: 2130, user_id: 88, movie_id: 1234, rating: 1 }
      ]}
    )   

    render(
      <BrowserRouter>
        <MovieView {...mockProps} currentUser={mockUser}/>
      </BrowserRouter>
    );

    const star1 = screen.getAllByText('★')[0]

    userEvent.click(star1)

    const rating = await waitFor(() => screen.getByText('Your Rating: 1'))
    expect(rating).toBeInTheDocument()
  });
});

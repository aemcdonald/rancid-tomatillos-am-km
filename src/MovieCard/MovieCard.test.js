import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard.js';
import ApiCalls from '../ApiCalls.js';
import MovieGrid from '../MovieGrid/MovieGrid.js';
jest.mock('../ApiCalls.js');

describe('MovieCard', () => {
  it('should render a movie card', () => {
    const testMovie = {id: 1, title: 'Titanic', average_rating: 3.0, release_date: '2020-09-29' }
    render(
      <BrowserRouter>
        <MovieCard
          key={1}
          movie={testMovie}
          userId={88}
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Average Rating: 3.0')).toBeInTheDocument();
    expect(screen.getByText('Titanic')).toBeInTheDocument();
    expect(screen.getByAltText('Titanic movie poster')).toBeInTheDocument();
    expect(screen.getByText('Release Date: 2020-09-29')).toBeInTheDocument();
  })

  it('should display average rating with one decimal place', () => {
    const testMovie = { average_rating: 3.3333 }
    render(
      <BrowserRouter>
        <MovieCard
          key={1}
          movie={testMovie}
          userId={88}
        />
      </BrowserRouter>
    );
     expect(screen.getByText('Average Rating: 3.3')).toBeInTheDocument();
   })

   it('should display a logged in user\'s rating if user has rated movie', async () => {
     ApiCalls.getAllMovies.mockResolvedValue(
       { movies: [ {id: 1, title: 'Mulan'} ] }
     )

     ApiCalls.getUserRatings.mockResolvedValue(
       { ratings: [ {id: 1, movie_id: 1, rating: 3} ] }
     )

     render(
       <BrowserRouter>
        <MovieGrid currentUserId={88}/>
       </BrowserRouter>
     )

     const rating = await waitFor(() => screen.getByText('Your Rating: 3'));
     expect(rating).toBeInTheDocument();
    })

   it('should prompt user to add rating if movie has not yet been rated', async () => {
     ApiCalls.getAllMovies.mockResolvedValue(
       { movies: [ {id: 1, title: 'Mulan'} ] }
     )

     ApiCalls.getUserRatings.mockResolvedValue(
       { ratings: [] }
     )

     render(
       <BrowserRouter>
        <MovieGrid currentUserId={88}/>
       </BrowserRouter>
     )

     const rating = await waitFor(() => screen.getByText('Click to add rating'));
     expect(rating).toBeInTheDocument();
   })
   //conditional render: if no user id, "sign in to add your rating"
})

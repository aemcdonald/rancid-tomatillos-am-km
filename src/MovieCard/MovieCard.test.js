import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard.js';

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

  // it('should display average rating with one decimal place', () => {
  //   render(
  //     <MovieCard
  //       key={1}
  //       avgRating={3.3333333}
  //       title="Titanic"
  //       photo="image path"
  //       releaseDate={"2020-09-29"}
  //     />);
  //   expect(screen.getByText('Average Rating: 3.3')).toBeInTheDocument();
  // })
})

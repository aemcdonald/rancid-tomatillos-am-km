import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MovieCard from './MovieCard.js';

describe('MovieCard', () => {
  it('should render a movie card', () => {
    render(
      <MovieCard
        key={1}
        avgRating={3}
        title="Titanic"
        photo="image path"
        releaseDate={"2020-09-29"}
      />);
    expect(screen.getByText('Average Rating: 3.0')).toBeInTheDocument();
    expect(screen.getByText('Titanic')).toBeInTheDocument();
    expect(screen.getByAltText('Titanic movie poster')).toBeInTheDocument();
    expect(screen.getByText('Release Date: 2020-09-29')).toBeInTheDocument();
  })
})

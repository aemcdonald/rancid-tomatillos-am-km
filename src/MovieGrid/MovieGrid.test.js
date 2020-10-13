import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ApiCalls from '../ApiCalls.js';
import MovieGrid from './MovieGrid.js';
jest.mock('../ApiCalls');

describe('MovieGrid', () => {
  it('load and render movies on load', async () => {
    ApiCalls.getAllMovies.mockResolvedValueOnce(
      { movies: [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' }
      ]}
    )

    render(<MovieGrid />);

    const movie1 = await waitFor(() => screen.getByText('Movie 1'));
    const movie2 = await waitFor(() => screen.getByText('Movie 2'));
    const movie3 = await waitFor(() => screen.getByText('Movie 3'));

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
    expect(movie3).toBeInTheDocument();
  });
})

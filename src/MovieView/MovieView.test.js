import React from 'react';
import ReactDOM from 'react-dom';
import MovieView from './MovieView';
import MovieGrid from './MovieView';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ApiCalls from '../ApiCalls.js';
import App from '../App/App.js';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../ApiCalls');

describe('MovieView', () => {
  it('should display a single movie when clicked', async () => {
    ApiCalls.getAllMovies.mockResolvedValueOnce(
      { movies: [
        { id: 1, title: 'Mulan' },
        { id: 2, title: 'Titanic' },
        { id: 3, title: 'Kill Bill' }
      ]}
    )

    render(<BrowserRouter><App /></BrowserRouter>);
    const movieTitle = await waitFor(() => screen.getByText('Mulan'));
    //screen.debug()
    expect(movieTitle).toBeInTheDocument();
    userEvent.click(screen.getByAltText('Mulan movie poster'));
    //
    ApiCalls.getSingleMovie.mockResolvedValueOnce(
      { movie: { id: 1, title: 'Mulan', release_date: '2020-09-04' } }
    )
    //
    // const releaseDate = await waitFor(() => screen.getByText('2020-09-04'))

    //
    // render(<MovieView />);


  });
})

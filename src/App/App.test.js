import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { App } from './App';
import ApiCalls from '../ApiCalls.js';
import userEvent from '@testing-library/user-event';
jest.mock('../ApiCalls.js');


describe('App', () => {
  it('Should log out a user when the logout button is clicked', async () => {
    const history = createMemoryHistory();

    ApiCalls.postUserLogin.mockResolvedValueOnce(
      { user: {id: 888, name: 'Olivia', email: 'olivia@turing.io'} }
    )
    ApiCalls.getAllMovies.mockResolvedValue(
      { movies: [ {id: 1, title: 'Mulan'} ] }
    )
    render(
      <BrowserRouter>
        <App history={history}/>
      </BrowserRouter>
    )

    userEvent.click(screen.getByText('Login'))
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    userEvent.type(screen.getByPlaceholderText('Email'), 'olivia@turing.io')
    userEvent.type(screen.getByPlaceholderText('Password'), 'pword')
    userEvent.click(screen.getByText('Login'))

    const logoutButton = await waitFor(() => screen.getByText('Logout'))
    expect(logoutButton).toBeInTheDocument()

    userEvent.click(screen.getByText('Logout'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  })
});

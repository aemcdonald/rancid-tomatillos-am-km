import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import App from '../App/App.js';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';


import ApiCalls from '../ApiCalls.js';
jest.mock('../ApiCalls.js');

describe('Login', () => {

  it('should render a login form', () => {
    render(<Login />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('should recieve an error if one of the inputs is empty', () => {
    render(<Login />)
    userEvent.type(screen.getByPlaceholderText('Email'), 'test@turing.io')
    userEvent.click(screen.getByText('Login'))
    expect(screen.getByText('Please type your email and password to sign in')).toBeInTheDocument()
  })

  it('should welcome the user after submitting login info', async () => {
    ApiCalls.postUserLogin.mockResolvedValueOnce(
      { user: {id: 888, name: 'Olivia', email: 'olivia@turing.io'} }
    )
    ApiCalls.getAllMovies.mockResolvedValue(
      { movies: [ {id: 1, title: 'Mulan'} ] }
    )

    ApiCalls.getUserRatings.mockResolvedValueOnce(
      { ratings: [ {id: 1, movie_id: 1, rating: 1} ] }
    )

    render(<BrowserRouter><App /></BrowserRouter>)
    userEvent.click(screen.getByText('Login'))
    userEvent.type(screen.getByPlaceholderText('Email'), 'olivia@turing.io')
    userEvent.type(screen.getByPlaceholderText('Password'), 'pword')
    userEvent.click(screen.getByText('Login'))

    const welcomeMessage = await waitFor(() => screen.getByText('Welcome, Olivia!'))
    expect(welcomeMessage).toBeInTheDocument();
  })
})

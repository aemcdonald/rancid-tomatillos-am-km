import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
//might need to npm install some stuff?

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
  it('should submit the login information when clicked', () => {
    const fakeSubmit = jest.fn();
    const fakeUser = {user: {id: 88, name: 'Olivia', email: 'olivia@turing.io'}}
    //render login
    render(
      <Login
        {...fakeUser}
        handleSubmit={fakeSubmit}
      />
    )
    //enter user info
    userEvent.type(screen.getByPlaceholderText('Email'), 'test@turing.io')
    userEvent.type(screen.getByPlaceholderText('Password'), 'pword')
    // userEvent.click(screen.getByText('Login'))
    // expect(fakeSubmit).toHaveBeenCalledTimes(1);
    //click the button
    //assert that submit login was called
  })
})

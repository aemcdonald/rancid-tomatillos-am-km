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
})

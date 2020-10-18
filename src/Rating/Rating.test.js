import React from 'react';
import ReactDOM from 'react-dom';
import ApiCalls from '../ApiCalls.js';
import MovieView from '../MovieView/MovieView';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../ApiCalls');

describe('Rating', () => {
  it('works', () => {
    expect(true).toEqual(true);
  })
  //add a rating
  //submit a rating
})

import React from 'react';
import CommentForm from './CommentForm';  
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('CommentForm', () => {
    it('Should render a form with an input and a button', () => {
        const mockUser = { email: 'olivia@turing.io', id: 88, name: 'Olivia' }
        const mockMovieId = 1

        const { getByPlaceholderText, getByText } = render(
            <CommentForm currentUser={mockUser} movieId={mockMovieId} />
        )

        const input = getByPlaceholderText('Leave a comment');
        const submitBtn = getByText('Submit');

        expect(input).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();   
    });  

    it('Should update when a user types into the input box', () => {
        const mockUser = { email: 'olivia@turing.io', id: 88, name: 'Olivia' }
        const mockMovieId = 1

        const { getByPlaceholderText, getByText } = render(
            <CommentForm currentUser={mockUser} movieId={mockMovieId} />
        )

        const inputBox = getByPlaceholderText('Leave a comment');
        userEvent.type(inputBox, ('Great movie!'));

        expect(inputBox).toHaveValue('Great movie!');
    }); 
});   
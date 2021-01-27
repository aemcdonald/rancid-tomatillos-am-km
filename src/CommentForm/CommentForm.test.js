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

    it('Should fire a function when the user clicks submit', () => {
        const mockUser = { email: 'olivia@turing.io', id: 88, name: 'Olivia' }
        const mockMovieId = 1
        const mockFn = jest.fn();

        const { getByPlaceholderText, getByText } = render(
            <CommentForm currentUser={mockUser} movieId={mockMovieId} addNewComment={mockFn}/>
        )

        const inputBox = getByPlaceholderText('Leave a comment');
        const submitBtn = getByText('Submit');
        userEvent.type(inputBox, ('Boring'));
        userEvent.click(submitBtn);

        expect(mockFn).toHaveBeenCalled();
    });
    
    it('Should not submit if a comment has not been filled out', () => {
        const mockUser = { email: 'olivia@turing.io', id: 88, name: 'Olivia' }
        const mockMovieId = 1
        const mockFn = jest.fn();

        const { getByText } = render(
            <CommentForm currentUser={mockUser} movieId={mockMovieId} addNewComment={mockFn}/>
        )

        const submitBtn = getByText('Submit');
        userEvent.click(submitBtn);

        expect(mockFn).not.toHaveBeenCalled();
    });
});   
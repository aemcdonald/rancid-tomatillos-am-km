import React from 'react';
import Comments from './Comments';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Comments', () => {
    it('Should display all comments', () => {
        const mockComments = [
            { author: 'Olivia', comment: 'Awesome movie!', id: 1 },
            { author: 'Sam', comment: 'Not a fan', id: 2 }
        ]

        const { getByText } = render(<Comments allComments={mockComments}/>)

        const comment1 = getByText('Olivia: Awesome movie!');
        const comment2 = getByText('Sam: Not a fan');    

        expect(comment1).toBeInTheDocument();
        expect(comment2).toBeInTheDocument();
    })
})
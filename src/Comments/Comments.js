import React from 'react';
import './Comments.css';

const Comments = ({ allComments }) => {
    return(
        allComments.length > 0 ? allComments.map((comment, i) => {
            return <h3>{comment.author}: {comment.comment}</h3>

        }) : <h3>No Comments Yet!</h3>
    )
}

export default Comments;

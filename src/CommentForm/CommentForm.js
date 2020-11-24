import React, { Component } from 'react';
import './CommentForm.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: this.props.currentUser.name,
            comment: ''
        }
    }

    render() {
        return(
            <h1>CommentForm Goes Here</h1>
        )
    }
}

export default CommentForm;

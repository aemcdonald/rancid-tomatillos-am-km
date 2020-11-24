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
            <form>
                <input
                    type='text'
                    placeholder='Leave a comment'
                    name='comment'
                    value={this.state.comment}
                />
            </form>
        )
    }
}

export default CommentForm;

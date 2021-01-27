import React, { Component } from 'react';
import './CommentForm.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            author: this.props.currentUser.name
        }
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    submitComment = () => {
        if (this.state.comment !== '') {
            const newComment = this.state
            this.props.addNewComment(newComment, this.props.movieId)
        }
        this.setState({ comment: '' })
    }

    render() {
        return(
            <form>
                <input
                    type='text'
                    placeholder='Leave a comment'
                    name='comment'
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <button type='button' onClick={this.submitComment}>Submit</button>
            </form>
        )
    }
}

export default CommentForm;

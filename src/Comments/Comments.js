import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiCalls from '../ApiCalls.js'
import CommentForm from '../CommentForm/CommentForm.js'
import './Comments.css';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
  }
  async componentDidMount() {
    const movieId = +this.props.movieId
    const userComments = await ApiCalls.getAllComments(movieId)
    if(Array.isArray(userComments.comments)) {
      this.setState({comments: userComments.comments})
    }
  }
  submitNewComment = async (commentInfo) => {
    const newComment = await ApiCalls.postNewComment(commentInfo, this.props.movieId)
    if(newComment.newComment.author && newComment.newComment.comment) {
      this.setState({comments: [...this.state.comments, newComment.newComment]})
    }
  }

  render() {
    const allComments = this.state.comments.map((comment, i) => {
      return (
        <section key={i}>
          <h2>{comment.author}</h2>
          <p>{comment.comment}</p>
        </section>
      )
    })
    return (
      <section>
        {this.props.userId.id && <CommentForm addComment={this.submitNewComment} userName={this.props.userId.name}/>}
        <section className="allComments">
          {this.state.comments.length ? allComments : 'No Comments Yet'}
        </section>
      </section>
    )
  }
}
export default Comments;

Comments.propTypes = {
  movieId: PropTypes.string,
  userName: PropTypes.object
};

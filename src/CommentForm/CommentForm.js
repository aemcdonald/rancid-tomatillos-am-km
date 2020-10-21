import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiCalls from '../ApiCalls.js'
import './CommentForm.css';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      author: this.props.userName
    }
  }
  handleInput = (event) => {
    this.setState({comment: event.target.value})
  }
  clearInput = () => {
    this.setState({comment: ''})
  }

  render() {
    return (
      <form>
        <input
          name="comment"
          type="text"
          autocomplete="off"
          placeholder="Leave a comment"
          value={this.state.comment}
          onChange={this.handleInput}
        />
        <button type="button" onClick={() => {
          this.props.addComment(this.state)
          this.clearInput()}}>
          SUBMIT</button>
      </form>
    )
  }
}
export default CommentForm;

CommentForm.propTypes = {
  addComment: PropTypes.func,
  userName: PropTypes.string
};

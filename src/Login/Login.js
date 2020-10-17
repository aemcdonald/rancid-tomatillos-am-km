import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
import App from '../App/App.js';
import './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  getUserInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitLogin = event => {
    event.preventDefault();
    const loginInfo = {
      ...this.state
    }
    if(this.formFulfilled()) {
      this.props.handleSubmit(loginInfo)
    }
  }

  formFulfilled = () => {
    if(this.state.email === '' || this.state.password === '') {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <form>
        <h2 className='errorMessage'>{!this.formFulfilled() && 'Please type your email and password to sign in'}</h2>
        <h2 className='errorMessage'>{this.props.errorMessage}</h2>
        <input
          type='text'
          label='email input'
          placeholder='Email'
          name='email'
          value={this.state.email.toLowerCase()}
          onChange={this.getUserInput}
        />
        <br></br>
        <input
          type='password'
          label='password input'
          placeholder='Password'
          name='password'
          value={this.state.password}
          onChange={this.getUserInput}
        />
        <br></br>
        <button onClick={this.submitLogin}>Login</button>
      </form>
    )
  }
}

export default Login;

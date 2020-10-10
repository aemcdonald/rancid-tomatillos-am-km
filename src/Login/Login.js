import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
import './Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: ''
      //name: 'Olivia', email: 'olivia@turing.io', password: 'pword'
    }
  }

  getUserInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          label='email input'
          placeholder='Email'
          name='userEmail'
          value={this.state.userEmail.toLowerCase()}
          onChange={this.getUserInput}
        />
        <input
          type='password'
          label='password input'
          placeholder='Password'
          name='userPassword'
          value={this.state.userPassword}
          onChange={this.getUserInput}
        />
        <button>Login</button>
      </form>
    )
  }
}

export default Login;

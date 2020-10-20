import React, { Component } from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import MovieGrid from '../MovieGrid/MovieGrid.js';
import MovieView from '../MovieView/MovieView.js';
import ApiCalls from '../ApiCalls.js';
import Login from '../Login/Login.js';
import './App.css';
import logo from '../RancidTomLogo.png';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isOnHomePage: true,
      error: ''
    }
  }

  updateCurrentUser = ({ user }) => {
    this.setState({ user }, () => {this.props.history.push('/')})
  }

  handleLoginSubmit = async (userInfo) => {
    const loginResult = await ApiCalls.postUserLogin(userInfo)
    if (loginResult.error) {
      this.setState({error: loginResult.error})
    } else {
      this.updateCurrentUser(loginResult)
    }
  }

  handleLogout = () => {
    this.setState({
      user: {},
      isOnHomePage: true
    })
    window.location.reload();
  }

  loginButtonFunction = () => {
    this.setState({isOnHomePage: false})
  }

  render() {
    return (
      <main className='App'>
      <img className='logo' src={logo} alt='Rancid Tomatillo Logo'/>
      <header className='header'>
        {!this.state.user.id && this.state.isOnHomePage &&
        <Link className="loginLogout" to={'/login'} onClick={() => this.loginButtonFunction()}>Login
        </Link> }
        {this.state.user.id &&
        <Link className="loginLogout" to={'/'} onClick={() => this.handleLogout()}>Logout
        </Link> }
        <section className='greeting'>{this.state.user.id && 'Welcome, ' + this.state.user.name + '!'}</section>
      </header>
      <Switch>
        <Route
          path='/login'
          render={(props) => (
            <Login {...props} handleSubmit={this.handleLoginSubmit} errorMessage={this.state.error} />
          )}
        />
        <Route exact path="/" render={() => (
          <MovieGrid currentUserId={this.state.user.id} />
          )}
        />
        <Route path="/:movieId" render={(props) => (
          <MovieView {...props} currentUserId={this.state.user.id} />
          )}
          />
      </Switch>
      </main>
    )
  }
}
export default withRouter(App)

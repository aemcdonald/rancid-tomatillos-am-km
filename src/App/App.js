import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieGrid from '../MovieGrid/MovieGrid.js';
import MovieView from '../MovieView/MovieView.js';
import ApiCalls from '../ApiCalls.js';
import Login from '../Login/Login.js';
import './App.css';
import logo from '../RancidTomLogo.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isOnHomePage: true
    }
  }

  updateCurrentUser = (userInfo) => {
    this.setState(userInfo)
  }

  handleLoginSubmit = (userInfo) => {
    ApiCalls.postUserLogin(userInfo)
    .then(data => this.updateCurrentUser(data))
  }

  handleLogout = () => {
    this.setState({
      user: {},
      isOnHomePage: true
    })
  }
  loginButtonFunction = () => {
    this.setState({isOnHomePage: false})
  }

  render() {
    return (
      <main className='App'>
      <img className='logo' src={logo} alt='Rancid Tomatillo Logo'/>
      <header className='header'>
        <Link to={'/login'} onClick={() => this.loginButtonFunction()}>
        {!this.state.user.id && this.state.isOnHomePage && <button>Login!</button>}
        </Link>
        <Link to={'/'}>
        {this.state.user.id && <button onClick={this.handleLogout}>Logout</button>}
        </Link>
        <section className='greeting'>{this.state.user.id && 'Welcome, ' + this.state.user.name + '!'}</section>
      </header>
      <Switch>
        <Route
          path='/login'
          render={(props) => (
            <Login {...props} handleSubmit={this.handleLoginSubmit} />
          )}
        />
        <Route exact path="/" render={() => (
          <MovieGrid currentUserId={78} />
          )}
        />
        <Route path="/:movieId" component={MovieView} />
      </Switch>
      </main>
    )
  }
}
export default App

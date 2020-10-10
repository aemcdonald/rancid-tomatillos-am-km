import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieGrid from '../MovieGrid/MovieGrid.js';
import MovieView from '../MovieView/MovieView.js';
import ApiCalls from '../ApiCalls.js';
import Login from '../Login/Login.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isOnHomePage: true
      //we will want these to be empty strings eventually...
    }
  }

  updateCurrentUser = (userInfo) => {
    console.log("App pre state", this.state)
    this.setState(userInfo)
    console.log("App state", this.state)
  }

  handleLoginSubmit = (userInfo) => {
    ApiCalls.postUserLogin(userInfo)
    .then(data => {console.log(data)
    this.updateCurrentUser(data)
    // return data
    //can use the data returned here to grab user ID later...
    })
  }

  handleLogout = () => {
    this.setState({
      user: {}
    })
  }
  loginButtonFunction = () => {
    const path = window.location.pathname
    console.log(path)
    if(!this.state.user.id && path === '/login') {
      return false
    } else {
      return true
    }
  }

  render() {
    let path = window.location.pathname
    return (
      <main className='App'>
        <header className='header'>
        <h1>Rancid Tomatillos</h1>
          <Link to={'/login'}>
            {path !== '/login' && <button>Login!</button>}
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
          <Route path="/" component={MovieGrid} exact />
          <Route path="/:movieId" component={MovieView} />
        </Switch>
      </main>
    )
  }
}
export default App

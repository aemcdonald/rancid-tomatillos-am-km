import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieGrid from '../MovieGrid/MovieGrid.js';
import MovieView from '../MovieView/MovieView.js';
import ApiCalls from '../ApiCalls.js';
import Login from '../Login/Login.js';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {id: 1, name: "Olivia", email: "alan@turing.io"}
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

  render() {
    return (
      <main className='App'>
        <header className='header'>
        <h1>Rancid Tomatillos</h1>
        {this.state.user.id ? 'Log Out' : 'Log In'}
        <section className='greeting'>{'Welcome, ' + this.state.user.name + '!'}</section>
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

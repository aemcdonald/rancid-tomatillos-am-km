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
      user: {}
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

  //login fn

  //logout fn

  //if (!user.id)
    //button "log in"
    //no greeting?
    //when button clicked, render login component
  //else
    //button logout
    //Welcome user
    //render /

  render() {
    return (
      <main className='App'>
        <header className='header'>
        <h1>Rancid Tomatillos</h1>
          <section>{!this.state.user.id && <button>Login</button>}</section>
          <section>
            {this.state.user.id && <button>Logout</button>}
            <section className='greeting'>{this.state.user.id && 'Welcome, ' + this.state.user.name + '!'}</section>
          </section>
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

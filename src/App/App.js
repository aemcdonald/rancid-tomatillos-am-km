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
    }
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
          <Route path="/" component={MovieGrid} exact />
          <Route path="/:movieId" component={MovieView} />
        </Switch>
      </main>
    )
  }
}
export default App

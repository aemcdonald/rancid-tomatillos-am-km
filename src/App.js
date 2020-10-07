import React, { Component } from 'react';
import MovieGrid from './MovieGrid.js';
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
        <MovieGrid />
      </main>
    )
  }
}
export default App

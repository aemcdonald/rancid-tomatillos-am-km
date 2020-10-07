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
        <header>{this.state.user.id ? 'Log Out' : 'Log In'}</header>
        <h1>Rancid Tomatillos</h1>
        <MovieGrid />
      </main>
    )
  }
}
export default App

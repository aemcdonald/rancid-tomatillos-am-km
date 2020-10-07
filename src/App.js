import React, { Component } from 'react';
import MovieGrid from './MovieGrid.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }
  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
      </main>
    )
  }
}
export default App

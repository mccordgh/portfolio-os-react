import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Desktop from './Desktop/Desktop.js';
import Footer from './Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Desktop />
      </div>
    );
  }
}

export default App;

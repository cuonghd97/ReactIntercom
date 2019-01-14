import React, { Component } from 'react';
import './css/style.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home></Home>
        </div>
      </Router>
    );
  }
}

export default App;

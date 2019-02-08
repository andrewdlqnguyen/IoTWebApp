import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Devices from './components/Devices/Devices';
import Navbar from './components/CustomNavbar/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/devices" component={Devices} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Map from './map'

//API Key: AIzaSyBRr7bxsY3bLOaO7VAQeyc0VaConhI1MvU

class App extends Component {

  render() {
    return (
      <div className="app">
          <Route path="/" exact component={Map} />
      </div>
    )
  }
}

export default App;


import React, { Component } from 'react';
import Error from './Error/Error';
import './App.css';

class App extends Component {
  state = {
    errors: [
      {type: 'Validation', quantity: 24},
      {type: 'DoJSON', quantity: 42},
      {type: 'PID Type', quantity: 2},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Exceptions Dashboard</h1>
        <button>Reload</button>
        <Error type = {this.state.errors[0].type} quantity = {this.state.errors[0].quantity}/>
        <Error type = {this.state.errors[1].type} quantity = {this.state.errors[1].quantity}/>
        <Error type = {this.state.errors[2].type} quantity = {this.state.errors[2].quantity}> Data still to be added </Error>
      </div>
    );
  }
}

export default App;

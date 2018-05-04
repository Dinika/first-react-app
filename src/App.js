import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exceptions Dashboard</h1>
        <Person name="DoJSON Errors" total="20"/>
        <Person name="Validation Errors" total="34"/>
        <Person name="PID Errors" total="2"> Data still to be added </Person>
      </div>
    );
  }
}

export default App;

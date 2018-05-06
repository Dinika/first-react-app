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

  switchQuantityHandler = (newQuanity) => {
    this.setState({
      errors: [
        {type: 'Validation', quantity: newQuanity},
        {type: 'DoJSON', quantity: 12},
        {type: 'PID Type', quantity: 2},
      ]
    })
  }

  typeChangeHandler = (event) => {
    this.setState({
      errors: [
        {type: 'Validation', quantity: 24},
        {type: event.target.value , quantity: 12},
        {type: 'PID Type', quantity: 2},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      padding: '10px',
      border: '1px solid #ddd',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Exceptions Dashboard</h1>
        <button style={style} onClick={this.switchQuantityHandler.bind(this, 20)}>Reload</button>
        <Error 
          type = {this.state.errors[0].type}
          quantity = {this.state.errors[0].quantity}
          click = {this.switchQuantityHandler.bind(this, 10)}/>
        <Error
          type = {this.state.errors[1].type} 
          quantity = {this.state.errors[1].quantity}
          change= {this.typeChangeHandler}/>
        <Error 
          type = {this.state.errors[2].type} 
          quantity = {this.state.errors[2].quantity}> Data still to be added </Error>
      </div>
    );
  }
}

export default App;

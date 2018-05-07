import React, { Component } from 'react';
import Error from './Error/Error';
import './App.css';

class App extends Component {
  state = {
    errors: [
      {type: 'Validation', quantity: 24},
      {type: 'DoJSON', quantity: 42},
      {type: 'PID Type', quantity: 2},
    ],
    showErrors : false,
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

  toggleErrorsHandler = () => {
    const doesShow = this.state.showErrors;
    this.setState({
      showErrors: !doesShow
    });
  }

  deleteErrorHandler = (errorIndex) => {
    //const errors = this.state.errors;
    const errors = [...this.state.errors];
    errors.splice(errorIndex, 1);
    this.setState({errors: errors});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      padding: '10px',
      border: '1px solid #ddd',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showErrors) {
      persons = (
        <div>
          {this.state.errors.map( (error, index) => {
            return <Error type = {error.type}
                  quantity = {error.quantity}
                  click = {this.deleteErrorHandler.bind(this, index)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Exceptions Dashboard</h1>
        <button style={style} onClick={this.toggleErrorsHandler}>Show Erros</button>
        {persons} 
      </div>
    );
  }
}

export default App;

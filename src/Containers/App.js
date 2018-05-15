import React, { Component } from 'react';
import Error from './Error/Error';
import styles from './App.css';
import data from './report-errors.json';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    exceptions: data,
    errors: [
      {id: '123', type: 'Validation', quantity: 22},
      {id: '345', type: 'DoJSON', quantity: 42},
      {id: '725', type: 'PID Type', quantity: 2},
    ],
    typeOfErrors: [],
    collections: [],
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

  typeChangeHandler = (event, id) => {
    const errorIndex = this.state.errors.findIndex((error) => {
      return error.id === id
    });
  
    const errorToUpdate = { ...this.state.errors[errorIndex]}
    errorToUpdate.type = event.target.value;
    const errors = [...this.state.errors];
    errors[errorIndex] = errorToUpdate;
    this.setState({errors: errors})
  }

  toggleErrorsHandler = () => {
    const doesShow = this.state.showErrors;
    this.setState({
      showErrors: !doesShow
    });
  }

  updateErrorCounterHandler = () => {
    console.log(this.state.exceptions.reduce( (tally, exception) => {
        tally[exception.dojson] = (tally[exception.dojson] || 0) + 1 ;
        return tally
    }, {}))
  }

  deleteErrorHandler = (errorIndex) => {
    //const errors = this.state.errors;
    const errors = [...this.state.errors];
    errors.splice(errorIndex, 1);
    this.setState({errors: errors});
  }

  render() {

    let exceptionsMetadata = null;
    let buttonClass = '';

    const classes = [];
    if(this.state.errors.length <= 1) {
      classes.push(styles.red);
    }
    if(this.state.errors.length <= 2) {
      classes.push(styles.bold);
    }

    if(this.state.showErrors) {
      exceptionsMetadata = (
        <div>
          {this.state.errors.map( (error, index) => {
            return <ErrorBoundary key = {error.id}>
                    <Error 
                      type = {error.type}
                      quantity = {error.quantity}
                      click = {this.deleteErrorHandler.bind(this, index)}
                      change = {(event) => {this.typeChangeHandler(event, error.id)}}/>
                    </ErrorBoundary>
          })}
        </div>
      );
      buttonClass = styles.red;
    }


    return (
      <div className={styles.App}>
        <h1>Exceptions Dashboard</h1>
        <p className={classes.join(' ')}>Click the buttons to see metadata</p>
        <button className={buttonClass} onClick={this.toggleErrorsHandler}>Show Erros</button>
        <button onClick={this.updateErrorCounterHandler}>Console errors</button>
        {exceptionsMetadata}
      </div>
    );
  }
}

export default App;

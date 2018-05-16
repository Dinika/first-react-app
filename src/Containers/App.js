import React, { Component } from 'react';
import Errors from '../Components/Errors/Errors';
import Error from '../Components/Errors/Error/Error';
import styles from './App.css';
import data from '../report-errors.json';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    console.log('[App.js] constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let exceptionsMetadata = null;

    if(this.state.showErrors) {
      exceptionsMetadata = (
          <Errors 
            errors={this.state.errors}
            clicked={this.deleteErrorHandler}
            changed={this.typeChangeHandler}/>
      );
    }


    return (
      <div className={styles.App}>
        <Cockpit 
          showErrors={this.state.showErrors}
          errors={this.state.errors}
          updated={this.updateErrorCounterHandler}
          clicked={this.toggleErrorsHandler}/>
        {exceptionsMetadata}
      </div>
    );
  }
}

export default App;

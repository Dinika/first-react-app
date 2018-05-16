import React , { Component } from 'react';
import Error from './Error/Error';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Errors extends Component {
  constructor(props) {
    super(props)
    console.log('Errors: constructor')
  }
  componentWillMount() {
    console.log('Errors: componentWillMount')
  }
  componentDidMount() {
    console.log('Errors: componentDidMount')
  }
  render() {
    console.log('Errors: render')
    return (this.props.errors.map( (error, index) => {
      return <ErrorBoundary key = {error.id}>
        <Error 
          type = {error.type}
          quantity = {error.quantity}
          click = {this.props.clicked.bind(this, index)}
          change = {(event) => {this.props.changed(event, error.id)}}/>
        </ErrorBoundary>
      } ))
  }
}

export default Errors;
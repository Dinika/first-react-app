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
  componentWillReceiveProps(updatedProps) {
    console.log('Errors: componentWillReceiveProps', updatedProps)
  }
  shouldComponentUpdate(updatedProps, updatedState) {
    console.log('Errors: shouldComponentUpdate', updatedProps, updatedState)
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Errors: componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate() {
    console.log('Errors: compoentDidUpdate')
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
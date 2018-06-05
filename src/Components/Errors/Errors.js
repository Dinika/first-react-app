import React , { PureComponent } from 'react';
import Error from './Error/Error';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Errors extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Errors: constructor');
    this.lastPersonRef = React.createRef();
  }
  componentWillMount() {
    console.log('Errors: componentWillMount')
  }
  componentDidMount() {
    this.lastPersonRef.current.focus();
    console.log('Errors: componentDidMount')
  }
  componentWillReceiveProps(updatedProps) {
    console.log('Errors: componentWillReceiveProps', updatedProps)
  }
  // shouldComponentUpdate(updatedProps, updatedState) {
  //   console.log('Errors: shouldComponentUpdate', updatedProps, updatedState)
  //   return true
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log('Errors: componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate() {
    console.log('Errors: componentDidUpdate')
  }
  render() {
    console.log('Errors: render')
    return (this.props.errors.map( (error, index) => {
      return <ErrorBoundary key = {error.id}>
        <Error 
          type = {error.type}
          quantity = {error.quantity}
          position = {index}
          ref={this.lastPersonRef}
          click = {this.props.clicked.bind(this, index)}
          change = {(event) => {this.props.changed(event, error.id)}}/>
        </ErrorBoundary>
      } ))
  }
}

export default Errors;
import React from 'react';
import Error from './Error/Error';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const errors = (props) => {
  return (props.errors.map( (error, index) => {
          return <ErrorBoundary key = {error.id}>
            <Error 
              type = {error.type}
              quantity = {error.quantity}
              click = {props.clicked.bind(this, index)}
              change = {(event) => {props.changed(event, error.id)}}/>
            </ErrorBoundary>
          } ))
  }

  export default errors;
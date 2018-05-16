import React , { Component } from 'react';
import styles from './Error.css';

class Error extends Component {
    constructor(props) {
      super(props)
      console.log('Error: constructor')
    }
    componentWillMount() {
      console.log('Error: componentWillMount')
    }
    componentDidMount() {
      console.log('Error: componentDidMount')
    }
    render() {
        console.log('Error: render')
        return (
            <div className={styles.Error}>
                <p onClick={this.props.click}>Total number of {this.props.type} errors - {this.props.quantity} </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.type}/>
            </div>)
    }
}

export default Error;

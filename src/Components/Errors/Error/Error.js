import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Error.css';
import Aux from '../../../Hoc/aux';
import {AuthContext} from '../../../Containers/App';

class Error extends Component {
    constructor(props) {
      super(props);
      this.inputElement = React.createRef();
      console.log('Error: constructor');
    }
    componentWillMount() {
      console.log('Error: componentWillMount')
    }
    componentDidMount() {
      console.log('Error: componentDidMount');
      if(this.props.position === 0) {
        this.inputElement.current.focus();
      }
    }
    focus() {
        this.inputElement.current.focus();
    }
    render() {
        console.log('Error: render')
        return (
            <Aux>
                <div className={styles.Error}>
                    <AuthContext.Consumer>
                        {(auth) => {
                            console.log(auth);
                            return auth ? <p>I'm Authenticated</p> : null;
                        }}
                    </AuthContext.Consumer>
                    <p onClick={this.props.click}>Total number of {this.props.type} errors - {this.props.quantity} </p>
                    <p>{this.props.children}</p>
                    <input
                        ref={this.inputElement}
                        type="text" 
                        onChange={this.props.change} 
                        value={this.props.type}/>
                </div>
            </Aux>)
    }
}

Error.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    type: PropTypes.string,
    position: PropTypes.number,
    quantity: PropTypes.number,
}

export default Error;

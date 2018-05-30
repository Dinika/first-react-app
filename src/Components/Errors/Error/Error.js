import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Error.css';
import Aux from '../../../Hoc/aux';
import withClasses from '../../../Hoc/withClasses';

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
            <Aux>
                <div className={styles.Error}>
                    <p onClick={this.props.click}>Total number of {this.props.type} errors - {this.props.quantity} </p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.change} value={this.props.type}/>
                </div>
            </Aux>)
    }
}

Error.propTypes = {
    click: PropTypes.func,
    change: PropTypes.func,
    type: PropTypes.string,
    quantity: PropTypes.number,
}
export default withClasses(Error);

import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../Hoc/aux';

const cockpit = (props) => {
  const classes = [];
  let buttonClass = styles.Button;
  if(props.showPerson) {
    buttonClass = [styles.Button, styles.red].join(' ');
  }

  if(props.errors.length <= 1) {
    classes.push(styles.red);
  }
  if(props.errors.length <= 2) {
    classes.push(styles.bold);
  }

  return(
    <Aux>
      <h1>Exceptions Dashboard</h1>
        <p className={classes.join(' ')}>Click the buttons to see metadata</p>
        <button className={buttonClass} onClick={props.clicked}>Show Erros</button>
        <button className={buttonClass} onClick={props.updated}>Console errors</button>
    </Aux>
  )
}

export default cockpit;
import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let buttonClass = '';
  if(props.showPerson) {
    buttonClass = styles.red;
  } 

  buttonClass = styles.red;

  if(props.errors.length <= 1) {
    classes.push(styles.red);
  }
  if(props.errors.length <= 2) {
    classes.push(styles.bold);
  }

  return(
    <div className={styles.Cockpit}>
      <h1>Exceptions Dashboard</h1>
        <p className={classes.join(' ')}>Click the buttons to see metadata</p>
        <button className={buttonClass} onClick={props.clicked}>Show Erros</button>
        <button onClick={props.updated}>Console errors</button>
    </div>
  )
}

export default cockpit;
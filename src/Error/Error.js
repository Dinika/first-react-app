import React from 'react';
import './Error.css';

const error = (props) => {
    return (
        <div className="Error">
            <p onClick={props.click}>Total number of {props.type} errors {props.quantity} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.type}/>
        </div>

    )
}

export default error;
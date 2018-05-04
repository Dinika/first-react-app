import React from 'react';

const error = (props) => {
    return (
        <div>
            <p>Total number of {props.type} errors {props.quantity} </p>
            <p>{props.children}</p>
        </div>

    )
}

export default error;
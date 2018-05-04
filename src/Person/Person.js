import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Total number of {props.name} errors {props.total} </p>
            <p>{props.children}</p>
        </div>

    )
}

export default person;
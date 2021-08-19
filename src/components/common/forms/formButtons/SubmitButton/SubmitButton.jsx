import React from 'react';
import classes from './submitButton.module.scss';

const SubmitButton = ({text, onSubmitHandler}) => {
    return (
        <div
            className={classes.SubmitButton}
            onClick = {onSubmitHandler}
        >
            {text}
        </div>
    )
}

export default SubmitButton;
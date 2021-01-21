import React from 'react';
import classes from './primaryButtonL.module.scss';

const PrimaryButtonL = ({colorTheme, text, onClickHandler}) => {
    return (
        <div 
            className={classes.PrimaryButtonL}
            onClick = {onClickHandler}
        >
            {text}
        </div>
    )
}

export default PrimaryButtonL;
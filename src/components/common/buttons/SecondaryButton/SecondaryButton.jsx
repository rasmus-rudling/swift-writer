import React from 'react';
import classes from './secondaryButton.module.scss';

const SecondaryButton = ({colorTheme, text, onClickHandler}) => {

    let buttonClass;

    if (colorTheme === 'orange') {
        buttonClass = classes.orangeButton;
    } else if (colorTheme === 'red') {
        buttonClass = classes.redButton;
    } else if (colorTheme === 'blue') {
        buttonClass = classes.blueButton;
    } else if (colorTheme === 'black') {
        buttonClass = classes.blackButton;
    } else if (colorTheme === 'green') {
        buttonClass = classes.greenButton;
    } else if (colorTheme === 'purple') {
        buttonClass = classes.purpleButton;
    } else if (colorTheme === 'gray') {
        buttonClass = classes.grayButton;
    } else if (colorTheme === 'white') {
        buttonClass = classes.whiteButton;
    }

    return (
        <button 
            className={buttonClass}
            onClick = {onClickHandler}
        >
            {text}
        </button>
    )
}

export default SecondaryButton;
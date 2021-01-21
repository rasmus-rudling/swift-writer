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
    }

    return (
        <div 
            className={buttonClass}
            onClick = {onClickHandler}
        >
            {text}
        </div>
    )
}

export default SecondaryButton;
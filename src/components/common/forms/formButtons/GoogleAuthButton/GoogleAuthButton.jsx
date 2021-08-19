import React from 'react';
import classes from './googleAuthButton.module.scss';

import googleIcon from '../../../../../resources/icons/googleIcon.svg';


const GoogleAuthButton = ({text, onClickHandler}) => {
    return (
        <div 
            onClick = {onClickHandler}
            className={classes.GoogleAuthButton}
        >
            <div className={classes.iconContainer}>
                <img src={googleIcon} />
            </div>
            {text}
        </div>
    )
}

export default GoogleAuthButton;
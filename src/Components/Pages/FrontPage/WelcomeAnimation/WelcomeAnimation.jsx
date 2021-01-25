import React, { useEffect, useState } from 'react';
import classes from './welcomeAnimation.module.scss';

const WelcomeAnimation = ({welcomeText}) => {
    return (
        <div className={classes.WelcomeAnimation}>
            <h2>
                &nbsp;
                {welcomeText.substring(0, 11)}
                <mark className={classes.logoText}>{welcomeText.substring(11, 22)}</mark>
                {welcomeText.substring(22, 62)}
                <i>{welcomeText.substring(62, 66)}</i>
                {welcomeText.substring(66, 71)}
                <i>{welcomeText.substring(71, 79)}</i>
                {welcomeText.substring(79, 80)}
            </h2>
        </div>
    )
}

export default WelcomeAnimation;
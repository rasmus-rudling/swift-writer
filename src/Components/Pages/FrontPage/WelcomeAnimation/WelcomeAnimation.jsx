import React, { useEffect, useState } from 'react';
import classes from './welcomeAnimation.module.scss';

import TextMarker from '../../../Common/TextMarker/TextMarker';

const WelcomeAnimation = ({welcomeText, animationFinished}) => {
    return (
        <div className={classes.WelcomeAnimation}>
            {welcomeText.substring(0, 11)}
            <mark className={classes.logoText}>&nbsp;{welcomeText.substring(11, 22)}&nbsp;</mark>
            {welcomeText.substring(22, 62)}
            <i>{welcomeText.substring(62, 66)}</i>
            {welcomeText.substring(66, 71)}
            <i>{welcomeText.substring(71, 79)}</i>
            {welcomeText.substring(79, 80)}
            {!animationFinished ? <TextMarker height="20px" /> : null}
        </div>
    )
}

export default WelcomeAnimation;
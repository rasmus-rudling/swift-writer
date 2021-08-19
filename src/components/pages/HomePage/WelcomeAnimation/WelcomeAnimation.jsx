import React from 'react';
import classes from './welcomeAnimation.module.scss';

import TextMarker from '../../../common/TextMarker/TextMarker';

const WelcomeAnimation = ({welcomeText}) => {
    return (
        <div className={classes.WelcomeAnimation}>
            {welcomeText.substring(0, 11)}
            <mark className={classes.logoText}>{welcomeText.substring(11, 22)}</mark>
            {welcomeText.substring(22, 62)}
            <i>{welcomeText.substring(62, 66)}</i>
            {welcomeText.substring(66, 71)}
            <i>{welcomeText.substring(71, 79)}</i>
            {welcomeText.substring(79, 80)}
            <TextMarker hide={false} />
        </div>
    )
}

export default WelcomeAnimation;
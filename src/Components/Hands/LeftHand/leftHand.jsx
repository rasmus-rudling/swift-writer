import React from 'react';
import classes from './leftHand.module.scss';

import leftHandImg from '../../../Resources/Images/leftHand.png';

const LeftHand = () => {
    return (
        <div className={classes.LeftHand}>
            <img src={leftHandImg} />
        </div>
    )
}

export default LeftHand;
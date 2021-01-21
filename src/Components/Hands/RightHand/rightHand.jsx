import React from 'react';
import classes from './rightHand.module.scss';

import rightHandImg from '../../../Resources/Images/rightHand.png';

const RightHand = () => {
    return (
        <div className={classes.RightHand}>
            <img src={rightHandImg} />
        </div>
    )
}

export default RightHand;
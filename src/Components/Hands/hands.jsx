import React from 'react';
import classes from './hands.module.scss';
import LeftHand from './LeftHand/leftHand';
import RightHand from './RightHand/rightHand';

const Hands = () => {
    return (
        <div className={classes.Hands}>
            <LeftHand />
            <RightHand />
        </div>
    )
}

export default Hands;
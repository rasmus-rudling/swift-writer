import React from 'react';
import classes from './leftHand.module.scss';

import leftHandImg from '../../../Resources/Images/leftHand.png';
import FingerIndicator from '../FingerIndicator/FingerIndicator';

const LeftHand = ({highlightedFingers}) => {
    return (
        <div className={classes.LeftHand}>
            <FingerIndicator 
                color="red" 
                top = "50px"
                left = "-11px"
                show = {highlightedFingers["pinkyL"]}
            />

            <FingerIndicator 
                color="blue" 
                top = "-2px"
                left = "28px"
                show = {highlightedFingers["ringL"]}
            />

            <FingerIndicator 
                color="orange" 
                top = "-10px"
                left = "72px"
                show = {highlightedFingers["middleL"]}
            />

            <FingerIndicator 
                color="green" 
                top = "0px"
                left = "116px"
                show = {highlightedFingers["indexL"]}
            />

            <FingerIndicator 
                color="purple" 
                top = "100px"
                left = "175px"
                show = {highlightedFingers["thumbL"]}
            />

            <img src={leftHandImg} />
        </div>
    )
}

export default LeftHand;
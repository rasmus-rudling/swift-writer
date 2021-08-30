import React from 'react';
import classes from './leftHand.module.scss';

import leftHand from '../../../../resources/images/hands/leftHand.svg';
import FingerIndicator from '../FingerIndicator/FingerIndicator';

const LeftHand = ({highlightedFingers, updateTime, extraClass}) => {
    let handClasses = [classes.LeftHand];

    if (extraClass !== undefined) {
        handClasses.push(extraClass);
    }

    return (
        <div className={handClasses.join(" ")}>
            {/* <FingerIndicator 
                color="red" 
                top = "50px"
                left = "-11px"
                show = {highlightedFingers["pinkyL"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="blue" 
                top = "-2px"
                left = "28px"
                show = {highlightedFingers["ringL"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="orange" 
                top = "-10px"
                left = "72px"
                show = {highlightedFingers["middleL"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="green" 
                top = "0px"
                left = "116px"
                show = {highlightedFingers["indexL"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="purple" 
                top = "100px"
                left = "175px"
                show = {highlightedFingers["thumbL"]}
                updateTime = {updateTime}
            /> */}

            <img src={leftHand} />
        </div>
    )
}

export default LeftHand;
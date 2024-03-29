import React from 'react';
import classes from './rightHand.module.scss';
import rightHandImg from '../../../resources/images/rightHand.png';

import FingerIndicator from '../FingerIndicator/FingerIndicator';

const RightHand = ({highlightedFingers, updateTime, extraClass}) => {
    let handClasses = [classes.RightHand];

    if (extraClass !== undefined) {
        handClasses.push(extraClass);
    }
    return (
        <div className={handClasses.join(" ")}>
            <FingerIndicator 
                color="purple" 
                top = "98px"
                left = "-9px"
                show = {highlightedFingers["thumbR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="red" 
                top = "-2px"
                left = "51px"
                show = {highlightedFingers["indexR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="blue" 
                top = "-10px"
                left = "95px"
                show = {highlightedFingers["middleR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="orange" 
                top = "-1px"
                left = "139px"
                show = {highlightedFingers["ringR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="green" 
                top = "50px"
                left = "178px"
                show = {highlightedFingers["pinkyR"]}
                updateTime = {updateTime}
            />

            <img src={rightHandImg} />
        </div>
    )
}

export default RightHand;
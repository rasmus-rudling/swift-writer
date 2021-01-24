import React from 'react';
import classes from './rightHand.module.scss';
import rightHandImg from '../../../Resources/Images/rightHand.png';

import FingerIndicator from '../FingerIndicator/FingerIndicator';

const RightHand = ({highlightedFingers, updateTime}) => {
    return (
        <div className={classes.RightHand}>
            <FingerIndicator 
                color="purple" 
                top = "98px"
                left = "41px"
                show = {highlightedFingers["thumbR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="red" 
                top = "-2px"
                left = "101px"
                show = {highlightedFingers["indexR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="blue" 
                top = "-10px"
                left = "145px"
                show = {highlightedFingers["middleR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="orange" 
                top = "-1px"
                left = "189px"
                show = {highlightedFingers["ringR"]}
                updateTime = {updateTime}
            />

            <FingerIndicator 
                color="green" 
                top = "50px"
                left = "228px"
                show = {highlightedFingers["pinkyR"]}
                updateTime = {updateTime}
            />

            <img src={rightHandImg} />
        </div>
    )
}

export default RightHand;
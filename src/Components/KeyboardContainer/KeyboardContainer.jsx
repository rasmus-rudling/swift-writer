import React, { useState } from 'react';
import LeftHand from '../Hands/LeftHand/LeftHand';
import RightHand from '../Hands/RightHand/RightHand';
import SweWinKeyboard from '../Keyboards/Swedish/Windows/SweWinKeyboard';
import classes from './keyboardContainer.module.scss';

const KeyboardContainer = ({keyboardType}) => {
    const [highlightedFingers, setHighlightedFingers] = useState({
        "pinkyL": true,
        "ringL": true,
        "middleL": true,
        "indexL": true,
        "thumbL": true,
        "thumbR": true,
        "indexR": true,
        "middleR": true,
        "ringR": true,
        "pinkyR": true,
    })
    
    let Keyboard;


    const keyEnterHandler = (finger) => {
        clearIndicatorsHandler();

        let prevHighlightedFingers =  {...highlightedFingers};

        if (finger === "thumbL" || finger === "thumbR") {
            prevHighlightedFingers["thumbL"] = true;
            prevHighlightedFingers["thumbR"] = true;
        } else {
            prevHighlightedFingers[finger] = true;
        }
        
        setHighlightedFingers(prevHighlightedFingers);
    }

    const keyLeaveHandler = () => {
        clearIndicatorsHandler();
    }

    const clearIndicatorsHandler = () => {
        let prevHighlightedFingers =  {...highlightedFingers};
        let fingers = Object.keys(prevHighlightedFingers);

        fingers.forEach(finger => {
            prevHighlightedFingers[finger] = false;
        })

        setHighlightedFingers(prevHighlightedFingers);
    }


    if (keyboardType === "swe-win") {
        Keyboard = (
            <SweWinKeyboard 
                keyLeave = {keyLeaveHandler}
                keyEnter = {keyEnterHandler}
                clearIndicators = {clearIndicatorsHandler}
            />
        );
    }


    return (
        <div className={classes.KeyboardContainer}>
            <LeftHand 
                highlightedFingers = {highlightedFingers}
            />
            {Keyboard}
            <RightHand 
                highlightedFingers = {highlightedFingers}
                keyLeave = {keyLeaveHandler}
                keyEnter = {keyEnterHandler}
            />
        </div>
    )
}

export default KeyboardContainer;
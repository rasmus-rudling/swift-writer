import React, { useState, useEffect } from 'react';
import LeftHand from '../../../Hands/LeftHand/LeftHand';
import RightHand from '../../../Hands/RightHand/RightHand';
import SweWinKeyboard from '../../../Keyboards/Swedish/Windows/SweWinKeyboard';
import classes from './keyboardContainer.module.scss';

const KeyboardContainer = ({keyboardType, activeKey, updateTime, allKeysActive}) => {
    const [highlightedFingers, setHighlightedFingers] = useState({
        "pinkyL": false,
        "ringL": false,
        "middleL": false,
        "indexL": false,
        "thumbL": false,
        "thumbR": false,
        "indexR": false,
        "middleR": false,
        "ringR": false,
        "pinkyR": false
    });
    
    let Keyboard;

    useEffect(() => {
        setHighlightedFingers({
            "pinkyL": "§1qaz<".includes(activeKey),
            "ringL": "2wsx".includes(activeKey),
            "middleL": "3edc".includes(activeKey),
            "indexL": "45rtfgvb".includes(activeKey),
            "thumbL": " ".includes(activeKey),
            "thumbR": " ".includes(activeKey),
            "indexR": "67yuhjnm".includes(activeKey),
            "middleR": "8ik,".includes(activeKey),
            "ringR": "9ol.".includes(activeKey),
            "pinkyR": "0+´på¨öä'-".includes(activeKey),
        })
    }, [activeKey])

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
                activeKey = {activeKey}
                updateTime = {updateTime}
                allKeysActive = {allKeysActive}
                extraClass = {classes.keyboard}
            />
        );
    }


    return (
        <div className={classes.KeyboardContainer}>
            <LeftHand 
                highlightedFingers = {highlightedFingers}
                updateTime = {updateTime}
                extraClass = {classes.leftHand}
            />
            {Keyboard}
            <RightHand 
                highlightedFingers = {highlightedFingers}
                updateTime = {updateTime}
                extraClass = {classes.rightHand}
            />
        </div>
    )
}

export default KeyboardContainer;
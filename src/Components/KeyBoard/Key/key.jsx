import React from 'react';
import classes from './key.module.scss';

const Key = ({char, shiftChar, altGrChar, width, finger, active=true}) => {
    let keyWidth, 
        BGColor, 
        borderColor,
        hasMarker,
        keyMarkerClass,
        activeKeyColor,
        keyClasses;
    
    const fingerColorMap = {
        "pinkyL": "red",
        "ringL": "blue",
        "middleL": "orange",
        "indexL": "green",
        "thumbL": "purple",
        "thumbR": "purple",
        "indexR": "red",
        "middleR": "blue",
        "ringR": "orange",
        "pinkyR": "green",
    };

    activeKeyColor = fingerColorMap[finger];
    keyClasses = [classes.Key];


    if (activeKeyColor === "red") {
        keyClasses.push(classes.redKey);
        borderColor = "#BF5252";
    } else if (activeKeyColor === "blue") {
        keyClasses.push(classes.blueKey);
        borderColor = "#5289BF";
    }  else if (activeKeyColor === "green") {
        keyClasses.push(classes.greenKey);
        borderColor = "#439957";
    }  else if (activeKeyColor === "orange") {
        keyClasses.push(classes.orangeKey);
        borderColor = "#BF9452";
    }  else if (activeKeyColor === "purple") {
        keyClasses.push(classes.purpleKey);
        borderColor = "#9752BF";
    } else {
        keyClasses.push(classes.grayKey);
        borderColor = "#777777";
    }
    
    if (!active) {
        keyClasses = [classes.Key, classes.grayKey];
        borderColor = "#777777";
    }  

    if (width === undefined) {
        keyWidth = "50px";
    } else {
        keyWidth = width;
    }

    if (char === 'F' || char === 'J') {
        hasMarker = true;
    } else {
        hasMarker = false;
    }

    if (hasMarker) {
        keyMarkerClass = classes.marker;
    } else {
        keyMarkerClass = classes.hide;
    }

    return (
        <div 
            className={keyClasses.join(" ")}
            style={{
                "width": keyWidth,
            }}
        >
            {char}

            <div 
                className={keyMarkerClass}
                style={{
                    "backgroundColor": borderColor
                }}
            />
        </div>
    )
}

export default Key;
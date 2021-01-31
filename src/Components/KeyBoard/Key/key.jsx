import React from 'react';
import classes from './key.module.scss';

const Key = ({
    char, 
    shiftChar, 
    altChar, 
    width, 
    finger, 
    keyLeave,
    keyEnter,
    updateTime,
    allKeysActive,
    active=false
}) => {
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
        if (allKeysActive && active) {
            keyClasses.push(classes.redActive);
            borderColor = "#BF5252";
        } else if (allKeysActive) {
            keyClasses.push(classes.redKey);
            borderColor = "#BF5252";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.redHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.redKey);
            borderColor = "#BF5252";
        }
    } else if (activeKeyColor === "blue") {
        if (allKeysActive && active) {
            keyClasses.push(classes.blueActive);
            borderColor = "#5289BF";
        } else if (allKeysActive) {
            keyClasses.push(classes.blueKey);
            borderColor = "#5289BF";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.blueHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.blueKey);
            borderColor = "#5289BF";
        }
    }  else if (activeKeyColor === "green") {
        if (allKeysActive && active) {
            keyClasses.push(classes.greenActive);
            borderColor = "#439957";
        } else if (allKeysActive) {
            keyClasses.push(classes.greenKey);
            borderColor = "#439957";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.greenHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.greenKey);
            borderColor = "#439957";
        }
    }  else if (activeKeyColor === "orange") {
        if (allKeysActive && active) {
            keyClasses.push(classes.orangeActive);
            borderColor = "#BF9452";
        } else if (allKeysActive) {
            keyClasses.push(classes.orangeKey);
            borderColor = "#BF9452";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.orangeHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.orangeKey);
            borderColor = "#BF9452";
        }
    }  else if (activeKeyColor === "purple") {
        if (allKeysActive && active) {
            keyClasses.push(classes.purpleActive);
            borderColor = "#9752BF";
        } else if (allKeysActive) {
            keyClasses.push(classes.purpleKey);
            borderColor = "#9752BF";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.purpleHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.purpleKey);
            borderColor = "#9752BF";
        }
    } else {
        if (allKeysActive && active) {
            keyClasses.push(classes.grayActive);
            borderColor = "#777777";
        } else if (allKeysActive) {
            keyClasses.push(classes.grayKey);
            borderColor = "#777777";
        } else if (!active) {
            keyClasses.push(classes.inActiveKey, classes.grayHover);
            borderColor = "#777777";
        } else {
            keyClasses.push(classes.grayKey);
            borderColor = "#777777";
        }
    }

    if (width === undefined) {
        keyWidth = "50px";
    } else {
        keyWidth = width;
    }

    if ('FfJj'.includes(char)) {
        hasMarker = true;
    } else {
        hasMarker = false;
    }

    if (hasMarker) {
        keyMarkerClass = classes.marker;
    } else {
        keyMarkerClass = classes.hide;
    }

    let transitionTime;

    if (updateTime > 150) {
        transitionTime = Math.sqrt(updateTime) / 100;
    } else {
        transitionTime = "none";
    }

    let topLeft = "", 
        topRight = "",
        bottomLeft = "", 
        bottomRight = "";

    if ("0123456789<,.-§¨'".includes(char)) {
        bottomLeft = char;
        topLeft = shiftChar;
        bottomRight = altChar;
    } else {
        topLeft = char;
        bottomLeft = shiftChar; // Måste lösa detta, bara stora bokstäver ska synas på tangentbordet
        bottomRight = altChar;
    }

    return (
        <div 
            className={keyClasses.join(" ")}
            style={{
                "width": keyWidth,
                "transition": transitionTime
            }}
            onMouseEnter={() => keyEnter(finger)}
            onMouseLeave={() => keyLeave()}
        >
            {
                keyWidth !== "50px"
                  ? <div>{char}</div>
                  : <div>
                        <div className={classes.topRow}>
                            {topLeft === "" ? <div></div> : <div>{topLeft}</div>}
                            {topRight === "" ? <div></div> : <div>{topRight}</div>}
                        </div>
                        <div className={classes.bottomRow}>
                            {bottomLeft === "" ? <div></div> : <div>{bottomLeft}</div>}
                            {bottomRight === "" ? <div></div> : <div>{bottomRight}</div>}
                        </div>
                    </div>
            }
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
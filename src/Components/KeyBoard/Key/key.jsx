import React from 'react';
import classes from './key.module.scss';

const Key = ({char, shiftChar, altChar, width}) => {
    let keyWidth;

    if (width === undefined) {
        keyWidth = "50px";
    } else {
        keyWidth = width;
    }
    return (
        <div 
            className={classes.Key}
            style={{
                "width": keyWidth
            }}
        >
            {char}
        </div>
    )
}

export default Key;
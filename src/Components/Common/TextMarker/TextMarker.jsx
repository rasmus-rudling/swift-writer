import React from 'react';
import classes from './textMarker.module.scss';

const TextMarker = ({height}) => {
    return (
        <div 
            className={classes.TextMarker}
            style={{
                "height": height
            }}
        />
    )
}

export default TextMarker;
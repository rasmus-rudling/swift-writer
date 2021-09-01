import React, { useState, useEffect } from 'react';
import classes from './textMarker.module.scss';

const TextMarker = ({hide}) => {
    const [showMarker, setShowMarker] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowMarker(!showMarker);
        }, 700)
    }, [showMarker])
    
    return (
        <span 
            className={classes.TextMarker}
            style = {{
                opacity: (showMarker && !hide) ? 1 : 0
            }}
        >|</span>
    )
}

export default TextMarker;
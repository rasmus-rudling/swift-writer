import React, { useState, useEffect} from 'react';
import classes from './logInPage.module.scss';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';

const LogInPage = () => {
    const fullHeaderText = "Sign In";
    const updateTime = wordsPerMinToUpdateTime(70, fullHeaderText);
    
    const [headerText, setHeaderText] = useState(" ");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false);
    

    useEffect(() => {
        setTimeout(() => {
            if (stops.includes(charIdx)) {
                let tempStops = [...stops];
                tempStops.shift();
                setStops(tempStops);
            } else if (charIdx < fullHeaderText.length) {
                let newChar = fullHeaderText.charAt(charIdx);

                if (charIdx === 0) {
                    setHeaderText(newChar);
                } else {
                    setHeaderText(headerText.concat(newChar));
                }
                
                setCharIdx(charIdx + 1);
            } else {
                setAnimationFinished(true);
            }
        }, updateTime);
    }, [charIdx, stops]);

    return (
        <div className={classes.LogInPage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>
        </div>
    )
}

export default LogInPage;
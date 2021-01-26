import React, { useState, useEffect} from 'react';
import classes from './feedbackPage.module.scss';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';

const FeedbackPage = () => {
    const fullHeaderText = "Give Feedback";
    const updateTime = wordsPerMinToUpdateTime(50, fullHeaderText);
    
    const [headerText, setHeaderText] = useState("_");
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
        <div className={classes.FeedbackPage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>
        </div>
    )
}

export default FeedbackPage;
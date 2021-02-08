import React, { useState, useEffect} from 'react';
import classes from './feedbackPage.module.scss';

import { useLanguage, useLanguageUpdate } from '../../../Contexts/LanguageContext';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';
import TestButton from '../../Common/Buttons/TestButton';

const FeedbackPage = () => {
    const changeLang = useLanguageUpdate();
    const currLang = useLanguage();
    
    const fullHeaderText = "Give Feedback";
    const updateTime = wordsPerMinToUpdateTime(50, fullHeaderText);
    
    const [headerText, setHeaderText] = useState(" ");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [showContent, setShowContent] = useState(false);
    
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

        setShowContent(true);
    }, [charIdx, stops]);

    return (
        <div className={classes.FeedbackPage} onClick={() => changeLang("swe")}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>
            {currLang}
            {/* <TestButton /> */}

        </div>
    )
}

export default FeedbackPage;
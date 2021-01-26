import React, {useEffect, useState} from 'react';
import classes from './contestPage.module.scss';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

const ContestPage = () => {
    const fullHeaderText = "Quick Contest";
    const updateTime = wordsPerMinToUpdateTime(35, fullHeaderText);
    
    const [headerText, setHeaderText] = useState("_");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (stops.includes(charIdx)) {
                let tempStops = [...stops];
                tempStops.shift();
                setStops(tempStops);
            } else if (charIdx < fullHeaderText.length) {
                let newChar = fullHeaderText.charAt(charIdx);
                let textWithoutMarker = headerText.substr(0, headerText.length-1);

                if (charIdx == fullHeaderText.length - 1) {
                    setHeaderText(textWithoutMarker.concat(newChar));
                } else {
                    setHeaderText(textWithoutMarker.concat(newChar).concat('_'));
                }
                
                setCharIdx(charIdx + 1);
            } 
        }, updateTime);
    }, [charIdx, stops]);

    return (
        <div className={classes.ContestPage}>
            <h1>{headerText}</h1>
        </div>
    )
}

export default ContestPage;
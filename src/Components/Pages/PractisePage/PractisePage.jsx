import React, {useEffect, useState} from 'react';
import classes from './practisePage.module.scss';
import { homeRow } from '../../Utility/practiceSets';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';

const PractisePage = () => {
    const fullHeaderText = "Quick Practise";
    const updateTime = wordsPerMinToUpdateTime(55, fullHeaderText);
    
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
        <div className={classes.PractisePage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>
            {homeRow["both"]}
        </div>
    )
}

export default PractisePage;
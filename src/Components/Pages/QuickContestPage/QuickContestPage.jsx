import React, {useEffect, useState} from 'react';
import classes from './quickContestPage.module.scss';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';
import QuickContestForm from '../../Common/Forms/FormContainer/FormContainer';
import TypeOfContestRadioButtons from '../../Common/Checkboxes/Checkboxes';
import RadioButton from '../../Common/RadioButton/RadioButton';
import StartContestButton from '../../Common/Forms/FormButtons/SubmitButton/SubmitButton';

const QuickContestPage = () => {
    const fullHeaderText = "Quick Contest";
    const updateTime = wordsPerMinToUpdateTime(55, fullHeaderText);
    
    const [headerText, setHeaderText] = useState(" ");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const [typeOfContest, setTypeOfContest] = useState({
        "Standard": true,
        "With friends": false
    })
    const [contestMode, setContestMode] = useState({
        "Ranked": false,
        "Casual": true
    });
    const [showContent, setShowContent] = useState(false);


    const typeOfContestHandler = (newContestType) => {
        let tempTypeOfContest = {...typeOfContest};
        let typeOfContestKeys = Object.keys(tempTypeOfContest);

        typeOfContestKeys.forEach(contestType => {
            tempTypeOfContest[contestType] = false
        })

        tempTypeOfContest[newContestType] = true;
        setTypeOfContest(tempTypeOfContest);
    }

    const contestModeHandler = (newContestMode) => {
        if (userLoggedIn) {
            let tempContestMode = {...contestMode};
            let contestModeKeys = Object.keys(tempContestMode);
    
            contestModeKeys.forEach(contestMode => {
                tempContestMode[contestMode] = false
            })
    
            tempContestMode[newContestMode] = true;
            setContestMode(tempContestMode);
        }
    }

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
        <div className={classes.QuickContestPage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>
            <QuickContestForm 
                show = {showContent}
                width = "290px"
            >
                <TypeOfContestRadioButtons title="Type of contest">
                    <RadioButton 
                        name = 'Standard'
                        isChecked = {typeOfContest['Standard']}
                        checkboxHandler = {typeOfContestHandler}
                        colorTheme = "light"
                    />

                    <RadioButton 
                        name = 'With friends'
                        isChecked = {typeOfContest['With friends']}
                        checkboxHandler = {typeOfContestHandler}
                        colorTheme = "light"
                    />
                </TypeOfContestRadioButtons>

                <TypeOfContestRadioButtons title="Contest mode">
                    <RadioButton 
                        name = 'Ranked'
                        isChecked = {contestMode['Ranked']}
                        checkboxHandler = {contestModeHandler}
                        colorTheme = "light"
                        disableMsg = "Log in required"
                        disable = {true}
                    />

                    <RadioButton 
                        name = 'Casual'
                        isChecked = {contestMode['Casual']}
                        checkboxHandler = {contestModeHandler}
                        colorTheme = "light"
                    />
                </TypeOfContestRadioButtons>

                <StartContestButton
                    text = "Start contest"
                />
            </QuickContestForm>
        </div>
    )
}

export default QuickContestPage;
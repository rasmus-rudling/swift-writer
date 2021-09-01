import React, { useState } from 'react';
import classes from './quickContestSettings.module.scss';

import QuickContestForm from '../../../common/forms/FormContainer/FormContainer';
import TypeOfContestRadioButtons from '../../../common/Checkboxes/Checkboxes';
import RadioButton from '../../../common/RadioButton/RadioButton';
import StartContestButton from '../../../common/forms/formButtons/SubmitButton/SubmitButton';

const QuickContestSettings = ({showForm}) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [typeOfContest, setTypeOfContest] = useState({
        "Standard": true,
        "With friends": false
    })
    const [contestMode, setContestMode] = useState({
        "Ranked": false,
        "Casual": true
    });
    

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

    return (
        <QuickContestForm 
            show = {showForm}
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
    )
}

export default QuickContestSettings;
import React, { useState } from 'react';
import classes from './quckPractiseSettings.module.scss';

import QuickPractiseForm from '../../../common/forms/FormContainer/FormContainer';
import StartPractiseButton from '../../../common/forms/formButtons/SubmitButton/SubmitButton';
import ContentCheckboxes from '../../../common/Checkboxes/Checkboxes';
import Checkbox from '../../../common/Checkbox/Checkbox';
import TypeOfPractiseRadioButtons from '../../../common/Checkboxes/Checkboxes';
import RadioButton from '../../../common/RadioButton/RadioButton';
import CustomCharsInput from '../../../common/forms/ShortTextInput/ShortTextInput';
import DurationSlider from '../../../common/Slider/CustomSlider1';
import DurationRadioButtons from '../../../common/Checkboxes/Checkboxes';

const QuckPractiseSettings = ({showForm}) => {
    const [contentToPractise, setContentToPractise] = useState({
        "Lowercase letters": true,
        "Uppercase letters": true,
        "Shift letters": true,
        "Alt letters": false
    })
    const [typeOfPractise, setTypeOfPractise] = useState({
        "Standard": true,
        "Custom characters": false
    })
    const [customCharsInput, setCustomCharsInput] = useState("");
    const [typeOfDuration, setTypeOfDuration] = useState({
        "Minutes": true,
        "Words": false
    });
    const [durationValue, setDurationValue] = useState(2);
    const [typeOfMisclickMode, setTypeOfMisclickMode] = useState({
        "I will correct my own misclicks": false,
        "Move to next char if I misclick": false,
        "Let me try again if I misclick": true
    });


    const contentCheckboxHandler = (letterType) => {
        if (typeOfPractise['Standard']) {
            let tempContentToPractise = {...contentToPractise};
            tempContentToPractise[letterType] = !tempContentToPractise[letterType];

            setContentToPractise(tempContentToPractise);
        }
    }

    const typeOfPractiseHandler = (newSelectedType) => {
        let tempTypeOfPractise = {...typeOfPractise};
        let typeOfPractiseKeys = Object.keys(tempTypeOfPractise);

        typeOfPractiseKeys.forEach(type => {
            tempTypeOfPractise[type] = false
        })

        tempTypeOfPractise[newSelectedType] = true;
        setTypeOfPractise(tempTypeOfPractise);

        if (newSelectedType === 'Custom characters') {
            setContentToPractise({
                "Lowercase letters": false,
                "Uppercase letters": false,
                "Shift letters": false,
                "Alt letters": false
            });
        }
    }    

    const customCharsInputHandler = (newCustomChars) => {
        setCustomCharsInput(newCustomChars);
    }

    const durationValueHandler = (newDurationValue) => {
        setDurationValue(newDurationValue);
    }

    const typeOfDurationHandler = (newDurationType) => {
        let tempTypeOfDuration = {...typeOfDuration};
        let typeOfDurationKeys = Object.keys(tempTypeOfDuration);

        typeOfDurationKeys.forEach(type => {
            tempTypeOfDuration[type] = false
        })

        tempTypeOfDuration[newDurationType] = true;
        setTypeOfDuration(tempTypeOfDuration);
        setDurationValue(10);
    }

    const typeOfMisclickModeHandler = (newMisclickMode) => {
        let tempTypeOfMisclickMode = {...typeOfMisclickMode};
        let typeOfMissclickModeKeys = Object.keys(tempTypeOfMisclickMode);

        typeOfMissclickModeKeys.forEach(type => {
            tempTypeOfMisclickMode[type] = false
        })

        tempTypeOfMisclickMode[newMisclickMode] = true;

        setTypeOfMisclickMode(tempTypeOfMisclickMode);
    }

    return (
        <QuickPractiseForm 
                show = {showForm}
                width = "290px"
            >
                <h3>Settings</h3>
                <TypeOfPractiseRadioButtons title="Type of practise">
                    <RadioButton 
                        name = 'Standard'
                        isChecked = {typeOfPractise['Standard']}
                        checkboxHandler = {typeOfPractiseHandler}
                        colorTheme = "light"
                    />

                    <RadioButton 
                        name = 'Custom characters'
                        isChecked = {typeOfPractise['Custom characters']}
                        checkboxHandler = {typeOfPractiseHandler}
                        colorTheme = "light"
                    />
                    <CustomCharsInput 
                        textValue = {customCharsInput}
                        inputName = "" 
                        disable={!typeOfPractise['Custom characters']}
                        onChangeHandler = {customCharsInputHandler}

                    />
                </TypeOfPractiseRadioButtons>

                <ContentCheckboxes title="Content">
                    <Checkbox 
                        name = 'Lowercase letters'
                        isChecked = {contentToPractise['Lowercase letters']}
                        checkboxHandler = {contentCheckboxHandler}
                        colorTheme = "light"
                        disable = {typeOfPractise['Custom characters']}
                    />

                    <Checkbox 
                        name = 'Uppercase letters'
                        isChecked = {contentToPractise['Uppercase letters']}
                        checkboxHandler = {contentCheckboxHandler}
                        colorTheme = "light"
                        disable = {typeOfPractise['Custom characters']}
                    />

                    <Checkbox 
                        name = 'Shift letters'
                        isChecked = {contentToPractise['Shift letters']}
                        checkboxHandler = {contentCheckboxHandler}
                        colorTheme = "light"
                        disable = {typeOfPractise['Custom characters']}
                    />

                    <Checkbox 
                        name = 'Alt letters'
                        isChecked = {contentToPractise['Alt letters']}
                        checkboxHandler = {contentCheckboxHandler}
                        colorTheme = "light"
                        disable = {typeOfPractise['Custom characters']}
                    />
                </ContentCheckboxes>

                <h4>Duration</h4>
                <DurationRadioButtons>
                    <RadioButton 
                        name = 'Minutes'
                        isChecked = {typeOfDuration['Minutes']}
                        checkboxHandler = {typeOfDurationHandler}
                        colorTheme = "light"
                    />

                    <RadioButton 
                        name = 'Words'
                        isChecked = {typeOfDuration['Words']}
                        checkboxHandler = {typeOfDurationHandler}
                        colorTheme = "light"
                    />
                </DurationRadioButtons>

                <DurationSlider 
                    sliderValue = {durationValue} 
                    valueChangeHandler = {durationValueHandler} 
                    minVal = {typeOfDuration['Words'] ? 50 : 1} 
                    maxVal = {typeOfDuration['Words'] ? 1000 : 15} 
                    stepSize = {typeOfDuration['Words'] ? 50 : 1}
                    sliderMargin = "-10px 0 0 0"
                />
                {typeOfDuration['Words'] ?
                    <div>Practise with <mark className={classes.durationValue}>{durationValue}</mark> words</div> :
                    <div>
                        Practise for 
                        <mark className={classes.durationValue}> {durationValue} </mark>
                        {durationValue === 1 ? "minute" : "minutes"}</div>
                }

                <TypeOfPractiseRadioButtons title="Misclick mode">
                    <RadioButton 
                        name = 'Let me try again if I misclick'
                        isChecked = {typeOfMisclickMode['Let me try again if I misclick']}
                        checkboxHandler = {typeOfMisclickModeHandler}
                        colorTheme = "light"
                    />

                    <RadioButton 
                        name = 'I will correct my own misclicks'
                        isChecked = {typeOfMisclickMode['I will correct my own misclicks']}
                        checkboxHandler = {typeOfMisclickModeHandler}
                        colorTheme = "light"
                    />

                    <RadioButton 
                        name = 'Move to next char if I misclick'
                        isChecked = {typeOfMisclickMode['Move to next char if I misclick']}
                        checkboxHandler = {typeOfMisclickModeHandler}
                        colorTheme = "light"
                    />

                    
                </TypeOfPractiseRadioButtons>

                <StartPractiseButton
                    text = "Start practise"
                />
            </QuickPractiseForm>
    )
}

export default QuckPractiseSettings;
import React from 'react';
import classes from './shortTextInput.module.scss';

const ShortTextInput = ({inputName, onChangeHandler, textValue="", inputType="text", placeholderText="", disable=false}) => {
    return (
        <div className={classes.ShortTextInput}>
            <h4>{inputName}</h4>
            <input 
                type={inputType}
                placeholder={placeholderText}
                onChange = {e => onChangeHandler(e.target.value)}
                disabled = {disable}
                value = {textValue}
            />
        </div>
        
    )
}

export default ShortTextInput;
import React from 'react';
import classes from './shortTextInput.module.scss';

const ShortTextInput = ({inputName, onChangeHandler, inputType="text", placeholderText=""}) => {
    return (
        <div className={classes.ShortTextInput}>
            {inputName}
            <input 
                type={inputType}
                placeholder={placeholderText}
                onChange = {onChangeHandler}
            />
        </div>
        
    )
}

export default ShortTextInput;
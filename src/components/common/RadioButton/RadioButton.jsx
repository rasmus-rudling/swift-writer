import React from 'react';

import classes from './radioButton.module.scss';

const Checkbox = ({name, isChecked, checkboxHandler, colorTheme, disable=false, disableMsg=""}) => {
    let searchClass, 
        textClass = classes.text;


    if (colorTheme == 'dark') {
        searchClass = classes.darkStyling;
    } else if (colorTheme == 'light') {
        searchClass = classes.lightStyling;
    }

    if (isChecked) {
        textClass = classes.checkedText;
    }

    return (
        <div className={classes.radioButtonContainer}>
            <label 
                className = {searchClass} 
                key = {name}
                style = {{
                    "cursor": !isChecked && !disable ? "pointer" : "default",
                    "opacity": disable ? "0.35" : "1"
                }}
            >
                <input
                    name={name}
                    type="checkbox"
                    checked={isChecked}
                    onClick={() => checkboxHandler(name)}
                />

                <span className={classes.checkmark}></span>
                <span className={textClass}>{name}</span>
                
                <br />
            </label>
            {disable ? <span className={classes.disableMsg}>{disableMsg}</span> : null}
        </div>
    )
}

export default Checkbox;
import React from 'react';

import classes from './checkbox.module.scss';

const Checkbox = ({name, isChecked, checkboxHandler, colorTheme, disable=false}) => {
    let searchClass;


    if (colorTheme == 'dark') {
        searchClass = classes.darkStyling;
    } else if (colorTheme == 'light') {
        searchClass = classes.lightStyling;
    }

    return (
        <label 
            className = {searchClass} 
            key = {name}
            style = {{
                "cursor": disable ? "default" : "pointer",
                "opacity": disable ? "0.35" : "1"
            }}
        >
            <input
                name={name}
                type="checkbox"
                checked={isChecked}
                onChange={() => checkboxHandler(name)}
            />

            <span className={classes.checkmark}></span>
            <span className={classes.text}>{name}</span>
            <br />
        </label>
    )
}

export default Checkbox;
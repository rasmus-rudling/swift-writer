import React from 'react';
import classes from './fingerIndicator.module.scss';

const FingerIndicator = ({color, top, left, show}) => {
    let backgroundColor,
        borderColor,
        fingerIndicatorClasses;

    if (color === "orange") {
        backgroundColor = "#FEC46E" ;
        borderColor = "#BF9452";
    } else if (color === "red") {
        backgroundColor = "#FE6E6E";
        borderColor = "#BF5252";
    } else if (color === "blue") {
        backgroundColor = "#6EB6FE";
        borderColor = "#5289BF";
    } else if (color === "green") {
        backgroundColor = "#60D97D";
        borderColor = "#439957 ";
    } else if (color === "purple") {
        backgroundColor = "#CA6EFE";
        borderColor = "#9752BF";
    } else if (color === "gray") {
        backgroundColor = "#BFBFBF";
        borderColor = "#777777";
    }

    if (show) {
        fingerIndicatorClasses = [classes.FingerIndicator]
    } else {
        fingerIndicatorClasses = [classes.FingerIndicator, classes.hideIndicator]
    }

    return (
        <div 
            className={fingerIndicatorClasses.join(" ")}
            style = {{
                "backgroundColor": backgroundColor,
                "borderColor": borderColor,
                "top": top,
                "left": left
            }}
        >
            
        </div>
    )
}

export default FingerIndicator;
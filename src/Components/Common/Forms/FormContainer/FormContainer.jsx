import React from 'react';
import classes from './formContainer.module.scss';

const FormContainer = ({logo, show, children}) => {
    const formLogo = logo !== undefined ? 
        <img 
            src={logo} 
            style = {{
                "marginBottom": "20px"
            }}
        />
    : null;

    let formClasses = [classes.FormContainer];

    if (!show) {
        formClasses.push(classes.hideForm);
    }

    return (
        <div 
            className={formClasses.join(" ")}
            style = {{
                "marginTop": logo === undefined ? "20px" : "60px",
                "paddingTop": logo === undefined ? "20px" : "0"
            }}
        >
            {formLogo}

            {children}
        </div>
    )
}

export default FormContainer;
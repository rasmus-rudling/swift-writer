import React from 'react';
import classes from './formContainer.module.scss';

import SWLogo from '../../../../resources/icons/SWLogo.svg';

const FormContainer = ({show, children, logo, width="auto"}) => {
    let formLogo = null;

    if (logo === "none") {
        formLogo = null;
    } else if (logo !== undefined) {
        formLogo = <img 
            src={logo} 
            style = {{
                "marginBottom": "20px"
            }}
        />
    } else {
        formLogo = <img 
            src={SWLogo} 
            style = {{
                "marginBottom": "20px"
            }}
        />
    }

    let formClasses = [classes.FormContainer];

    if (!show) {
        formClasses.push(classes.hideForm);
    }

    if (width !== "auto") {

    }

    return (
        <div 
            className={formClasses.join(" ")}
            style = {{
                "marginTop": logo === "none" ? "20px" : "60px",
                "paddingTop": logo === "none" ? "20px" : "0",
                "width": width !== "auto" ? width : "fitContent"
            }}
        >
            {formLogo}

            {children}
        </div>
    )
}

export default FormContainer;
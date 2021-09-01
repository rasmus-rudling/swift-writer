import React from 'react';
import classes from './checkboxes.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const Checkboxes = ({children, title}) => {
    return (
        <div className={classes.Checkboxes}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default Checkboxes;
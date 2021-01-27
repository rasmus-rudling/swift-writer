import React from 'react';
import classes from './divider.module.scss';

const Divider = ({text}) => {
    return (
        <div className={classes.Divider}>
            <div className={classes.horizontalLine} />
            {text}
            <div className={classes.horizontalLine} />
        </div>
    )
}

export default Divider;
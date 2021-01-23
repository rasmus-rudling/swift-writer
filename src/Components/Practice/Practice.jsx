import React from 'react';
import classes from './practice.module.scss';
import { homeRow } from '../Utility/practiceSets';

const Practice = () => {
    console.log(homeRow["level1"]);
    return (
        <div className={classes.Practice}>
            {homeRow["both"]}
        </div>
    )
}

export default Practice;
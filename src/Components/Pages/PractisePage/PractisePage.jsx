import React from 'react';
import classes from './practisePage.module.scss';
import { homeRow } from '../../Utility/practiceSets';


const PractisePage = () => {
    return (
        <div className={classes.PractisePage}>
            <h1>Practise</h1>
            {homeRow["both"]}
        </div>
    )
}

export default PractisePage;
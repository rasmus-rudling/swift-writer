import React from 'react';
import classes from './mainMenu.module.scss';
import SWLogo from '../../Resources/Icons/SWLogo.svg';

import LogInButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import LanguageButton from '../Common/Buttons/SecondaryButton/SecondaryButton';

const MainMenu = () => {
    const logInHandler = () => {
        console.log("User wants to log in!");
    }

    return (
        <div className={classes.MainMenu}>
            <img src={SWLogo} />

            <div className={classes.rightSideContent}>
                <LogInButton
                    colorTheme = 'green'
                    text = 'Log in'
                    onClickHandler = {logInHandler}
                />
            </div>
            
        </div>
    )
}

export default MainMenu;
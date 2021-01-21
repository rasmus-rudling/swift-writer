import React from 'react';
import classes from './mainMenu.module.scss';
import SWLogo from '../../Resources/Icons/SWLogo.svg';

import LogInButton from '../Common/Buttons/PrimaryButtonL/primaryButtonL';

const MainMenu = () => {
    const logInHandler = () => {
        console.log("User wants to log in!");
    }

    return (
        <div className={classes.MainMenu}>
            <img src={SWLogo} />

            <LogInButton
                colorTheme = 'light'
                text = 'Log in'
                onClickHandler = {logInHandler}
            />
        </div>
    )
}

export default MainMenu;
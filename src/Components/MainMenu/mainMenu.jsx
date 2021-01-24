import React from 'react';
import classes from './mainMenu.module.scss';
import SWLogo from '../../Resources/Icons/whiteSWLogo.svg';

import LogInButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import SignUpButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import FeedbackButton from '../Common/Buttons/SecondaryButton/SecondaryButton';

import QuickPractiseButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import QuickRaceButton from '../Common/Buttons/PrimaryButton/PrimaryButton';

const MainMenu = () => {
    const logInHandler = () => {
        console.log("User wants to log in!");
    }

    return (
        <div className={classes.MainMenu}>
            <div className={classes.logo}>SwiftWriter</div>

            <div className={classes.rightSideContent}>
                <FeedbackButton 
                    colorTheme = 'white'
                    text = 'Give Feedback'
                    onClickHandler = {logInHandler}
                />

                <QuickRaceButton
                    colorTheme = 'purple'
                    text = 'Quick Contest'
                    onClickHandler = {logInHandler}
                />

                <QuickPractiseButton
                    colorTheme = 'purple'
                    text = 'Quick Practise'
                    onClickHandler = {logInHandler}
                />

                <SignUpButton
                    colorTheme = 'blue'
                    text = 'Sign up'
                    onClickHandler = {logInHandler}
                />

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
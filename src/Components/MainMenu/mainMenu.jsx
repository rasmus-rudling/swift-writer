import React from 'react';
import classes from './mainMenu.module.scss';
import { useHistory } from "react-router-dom";

import LogInButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import SignUpButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import FeedbackButton from '../Common/Buttons/SecondaryButton/SecondaryButton';

import QuickPractiseButton from '../Common/Buttons/PrimaryButton/PrimaryButton';
import QuickRaceButton from '../Common/Buttons/PrimaryButton/PrimaryButton';

const MainMenu = () => {
    const history = useHistory();
    let menuClasses = [classes.MainMenu];

    return (
        <div className={menuClasses.join(" ")}>
            <div 
                className={classes.logo}
                onClick = {() => history.push("/")}
            >SwiftWriter</div>

            <div className={classes.rightSideContent}>
                <FeedbackButton 
                    colorTheme = 'red'
                    text = 'Give Feedback'
                    onClickHandler = {() => history.push("/feedback")}
                />

                <QuickRaceButton
                    colorTheme = 'red'
                    // colorTheme = 'purple'
                    text = 'Quick Contest'
                    onClickHandler = {() => history.push("/contestPage")}
                />

                <QuickPractiseButton
                    colorTheme = 'red'
                    // colorTheme = 'purple'
                    text = 'Quick Practise'
                    onClickHandler = {() => history.push("/practise")}
                />

                <SignUpButton
                    colorTheme = 'red'
                    // colorTheme = 'blue'
                    text = 'Sign up'
                    onClickHandler = {() => history.push("/sign-up")}
                />

                <LogInButton
                    colorTheme = 'red'
                    // colorTheme = 'green'
                    text = 'Sign in'
                    onClickHandler = {() => history.push("/sign-in")}
                />
            </div>
            
        </div>
    )
}

export default MainMenu;
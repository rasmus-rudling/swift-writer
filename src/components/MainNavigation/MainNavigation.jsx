import React from 'react';
import classes from './mainNavigation.module.scss';
import { useHistory } from "react-router-dom";

import LogInButton from '../common/buttons/PrimaryButton/PrimaryButton';
import SignUpButton from '../common/buttons/PrimaryButton/PrimaryButton';
import FeedbackButton from '../common/buttons/SecondaryButton/SecondaryButton';

import QuickPractiseButton from '../common/buttons/PrimaryButton/PrimaryButton';
import QuickRaceButton from '../common/buttons/PrimaryButton/PrimaryButton';

const MainNavigation = () => {
    const history = useHistory();
    let menuClasses = [classes.MainNavigation];

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

export default MainNavigation;
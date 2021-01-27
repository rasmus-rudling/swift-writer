import React, { useState, useEffect} from 'react';
import classes from './signInPage.module.scss';
import SWLogo from '../../../Resources/Icons/SWLogo.svg';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';

import TextMarker from '../../Common/TextMarker/TextMarker';

import SignInForm from '../../Common/Forms/FormContainer/FormContainer';
import EmailInput from '../../Common/Forms/ShortTextInput/ShortTextInput';
import UsernameInput from '../../Common/Forms/ShortTextInput/ShortTextInput';
import PasswordInput from '../../Common/Forms/ShortTextInput/ShortTextInput';
import RepeatPasswordInput from '../../Common/Forms/ShortTextInput/ShortTextInput';
import SubmitButton from '../../Common/Forms/FormButtons/SubmitButton/SubmitButton';
import OrDivider from '../../Common/Forms/Divider/Divider';
import GoogleSignUpButton from '../../Common/Forms/FormButtons/GoogleAuthButton/GoogleAuthButton';

const SignUpPage = () => {
    const fullHeaderText = "Sign In";
    const updateTime = wordsPerMinToUpdateTime(75, fullHeaderText);
    
    const [headerText, setHeaderText] = useState(" ");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (stops.includes(charIdx)) {
                let tempStops = [...stops];
                tempStops.shift();
                setStops(tempStops);
            } else if (charIdx < fullHeaderText.length) {
                let newChar = fullHeaderText.charAt(charIdx);

                if (charIdx === 0) {
                    setHeaderText(newChar);
                } else {
                    setHeaderText(headerText.concat(newChar));
                }
                
                setCharIdx(charIdx + 1);
            } else {
                setAnimationFinished(true);
            }
        }, updateTime);
    }, [charIdx, stops]);
    

    return (
        <div className={classes.SignInPage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>

            <SignInForm 
                logo = {SWLogo}
                show = {animationFinished}
            >
                <EmailInput inputName = "Email" />
                <UsernameInput inputName = "Username" />
                <PasswordInput inputName = "Password" inputType="password" />

                <SubmitButton 
                    text = "Sign in"
                    // onChange = {e => e.preventDefault()}
                />
                <OrDivider text="or" />
                <GoogleSignUpButton
                    text="Sign in with Google"
                    onClick = {() => console.log("User wants to sign in with Google!")}
                />
            </SignInForm>
        </div>
    )
}

export default SignUpPage;
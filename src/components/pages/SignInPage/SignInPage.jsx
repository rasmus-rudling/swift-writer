import React, { useState, useEffect} from 'react';
import classes from './signInPage.module.scss';
import SWLogo from '../../../resources/icons/SWLogo.svg';

import findStopsInText from '../../../utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../../utility/wordsPerMinToUpdateTime';

import TextMarker from '../../common/TextMarker/TextMarker';

import SignInForm from '../../common/forms/FormContainer/FormContainer';
import EmailInput from '../../common/forms/ShortTextInput/ShortTextInput';
import UsernameInput from '../../common/forms/ShortTextInput/ShortTextInput';
import PasswordInput from '../../common/forms/ShortTextInput/ShortTextInput';
import RepeatPasswordInput from '../../common/forms/ShortTextInput/ShortTextInput';
import SubmitButton from '../../common/forms/formButtons/SubmitButton/SubmitButton';
import OrDivider from '../../common/forms/Divider/Divider';
import GoogleSignUpButton from '../../common/forms/formButtons/GoogleAuthButton/GoogleAuthButton';

const SignUpPage = () => {
    const fullHeaderText = "Sign In";
    const updateTime = wordsPerMinToUpdateTime(75, fullHeaderText);
    
    const [headerText, setHeaderText] = useState(" ");
    const [stops, setStops] = useState(findStopsInText(fullHeaderText));
    const [charIdx, setCharIdx] = useState(0);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [showContent, setShowContent] = useState(false);

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

        setShowContent(true);
    }, [charIdx, stops]);
    

    return (
        <div className={classes.SignInPage}>
            <h1>
                {headerText}
                <TextMarker hide={animationFinished} />
            </h1>

            <SignInForm 
                show = {showContent}
            >
                <EmailInput inputName = "Email or Username" />
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
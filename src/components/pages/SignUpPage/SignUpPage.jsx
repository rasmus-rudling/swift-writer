import React, { useState, useEffect } from "react";
import classes from "./signUpPage.module.scss";

import findStopsInText from "../../../utility/findStopsInText";
import wordsPerMinToUpdateTime from "../../../utility/wordsPerMinToUpdateTime";

import TextMarker from "../../common/TextMarker/TextMarker";

import SignUpForm from "../../common/forms/FormContainer/FormContainer";
import EmailInput from "../../common/forms/ShortTextInput/ShortTextInput";
import UsernameInput from "../../common/forms/ShortTextInput/ShortTextInput";
import PasswordInput from "../../common/forms/ShortTextInput/ShortTextInput";
import RepeatPasswordInput from "../../common/forms/ShortTextInput/ShortTextInput";
import SubmitButton from "../../common/forms/formButtons/SubmitButton/SubmitButton";
import OrDivider from "../../common/forms/Divider/Divider";
import GoogleSignUpButton from "../../common/forms/formButtons/GoogleAuthButton/GoogleAuthButton";

const SignUpPage = () => {
	const fullHeaderText = "Sign Up";
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
		<div className={classes.SignUpPageContainer}>
			<div className={classes.SignUpPage}>
				<h1>
					{headerText}
					<TextMarker hide={animationFinished} />
				</h1>

				<SignUpForm show={showContent}>
					<EmailInput inputName="Email" />
					<UsernameInput inputName="Username" />
					<PasswordInput inputName="Password" inputType="password" />
					<RepeatPasswordInput
						inputName="Repeat Password"
						inputType="password"
					/>

					<SubmitButton
						text="Create free account"
						// onChange = {e => e.preventDefault()}
					/>
					<OrDivider text="or" />
					<GoogleSignUpButton
						text="Sign up with Google"
						onClick={() =>
							console.log("User wants to sign up with Google!")
						}
					/>
				</SignUpForm>
			</div>
		</div>
	);
};

export default SignUpPage;

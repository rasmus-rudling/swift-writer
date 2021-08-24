import React, { useState, useEffect } from "react";
import classes from "./signInPage.module.scss";
import SWLogo from "../../../resources/icons/SWLogo.svg";

import findStopsInText from "../../../utility/findStopsInText";
import wordsPerMinToUpdateTime from "../../../utility/wordsPerMinToUpdateTime";

import TextMarker from "../../common/TextMarker/TextMarker";

import SignInForm from "../../common/forms/FormContainer/FormContainer";
import EmailInput from "../../common/forms/ShortTextInput/ShortTextInput";
import UsernameInput from "../../common/forms/ShortTextInput/ShortTextInput";
import PasswordInput from "../../common/forms/ShortTextInput/ShortTextInput";
import RepeatPasswordInput from "../../common/forms/ShortTextInput/ShortTextInput";
import SubmitButton from "../../common/forms/formButtons/SubmitButton/SubmitButton";
import OrDivider from "../../common/forms/Divider/Divider";
import GoogleSignUpButton from "../../common/forms/formButtons/GoogleAuthButton/GoogleAuthButton";
import HeaderAnimation from "../../common/HeaderAnimation/HeaderAnimation";

const SignUpPage = () => {
	const [showContent, setShowContent] = useState(false);

	const showContentHandler = (newShowContent) => {
		setShowContent(newShowContent);
	};

	return (
		<div className={classes.SignInPageContainer}>
			<div className={classes.SignInPage}>
				<HeaderAnimation
					headerText="Quick Contest"
					showContentHandler={showContentHandler}
				/>

				<SignInForm show={showContent}>
					<EmailInput inputName="Email or Username" />
					<PasswordInput inputName="Password" inputType="password" />

					<SubmitButton
						text="Sign in"
						// onChange = {e => e.preventDefault()}
					/>
					<OrDivider text="or" />
					<GoogleSignUpButton
						text="Sign in with Google"
						onClick={() =>
							console.log("User wants to sign in with Google!")
						}
					/>
				</SignInForm>
			</div>
		</div>
	);
};

export default SignUpPage;

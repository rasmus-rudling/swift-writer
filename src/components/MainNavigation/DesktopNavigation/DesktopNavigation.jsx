import React from "react";
import classes from "./desktopNavigation.module.scss";

import LogInButton from "../../common/buttons/PrimaryButton/PrimaryButton";
import SignUpButton from "../../common/buttons/PrimaryButton/PrimaryButton";
import FeedbackButton from "../../common/buttons/SecondaryButton/SecondaryButton";

import QuickPractiseButton from "../../common/buttons/PrimaryButton/PrimaryButton";
import QuickRaceButton from "../../common/buttons/PrimaryButton/PrimaryButton";
import { useHistory } from "react-router-dom";

const DesktopNavigation = () => {
	const history = useHistory();

	return (
		<div className={classes.DesktopNavigation}>
			<div className={classes.rightSideContent}>
				<FeedbackButton
					colorTheme="red"
					text="Give Feedback"
					onClickHandler={() => history.push("/feedback")}
				/>

				<QuickRaceButton
					colorTheme="red"
					text="Quick Contest"
					onClickHandler={() => history.push("/contestPage")}
				/>

				<QuickPractiseButton
					colorTheme="red"
					// colorTheme = 'purple'
					text="Quick Practise"
					onClickHandler={() => history.push("/practise")}
				/>

				<SignUpButton
					colorTheme="red"
					// colorTheme = 'blue'
					text="Sign up"
					onClickHandler={() => history.push("/sign-up")}
				/>

				<LogInButton
					colorTheme="red"
					// colorTheme = 'green'
					text="Sign in"
					onClickHandler={() => history.push("/sign-in")}
				/>
			</div>
		</div>
	);
};

export default DesktopNavigation;

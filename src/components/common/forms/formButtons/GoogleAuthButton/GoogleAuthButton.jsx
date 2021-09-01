import React from "react";
import classes from "./googleAuthButton.module.scss";

import googleIcon from "../../../../../resources/icons/googleIcon.svg";

const GoogleAuthButton = ({ text, onClickHandler }) => {
	return (
		<button onClick={onClickHandler} className={classes.GoogleAuthButton}>
			<div className={classes.iconContainer}>
				<img src={googleIcon} />
			</div>
			{text}
		</button>
	);
};

export default GoogleAuthButton;

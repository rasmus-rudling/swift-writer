import React from "react";
import classes from "./submitButton.module.scss";

const SubmitButton = ({ text, onSubmitHandler }) => {
	return (
		<button className={classes.SubmitButton} onClick={onSubmitHandler}>
			{text}
		</button>
	);
};

export default SubmitButton;

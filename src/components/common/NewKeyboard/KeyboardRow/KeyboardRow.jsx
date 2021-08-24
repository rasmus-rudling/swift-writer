import React from "react";
import classes from "./keyboardRow.module.scss";

const KeyboardRow = ({ children, keyboardWidth }) => {
	return (
		<div
			className={classes.KeyboardRow}
			style={{
				marginTop: keyboardWidth / 105,
			}}
		>
			{children}
		</div>
	);
};

export default KeyboardRow;

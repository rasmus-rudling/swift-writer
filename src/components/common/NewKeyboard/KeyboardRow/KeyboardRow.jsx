import React from "react";
import classes from "./keyboardRow.module.scss";

const KeyboardRow = ({ children, keyDistance, rowHeight }) => {
	return (
		<div
			className={classes.KeyboardRow}
			style={{
				marginTop: keyDistance,
				height: rowHeight,
			}}
		>
			{children}
		</div>
	);
};

export default KeyboardRow;

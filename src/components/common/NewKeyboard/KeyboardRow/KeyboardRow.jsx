import React from "react";
import classes from "./keyboardRow.module.scss";

const KeyboardRow = ({ children, keyboardDim }) => {
	let rowHeight = keyboardDim.width / 105;
	let rowMarginTop = keyboardDim.width / 105;

	return (
		<div
			className={classes.KeyboardRow}
			style={{
				marginTop: rowMarginTop,
				height: rowHeight,
			}}
		>
			{children}
		</div>
	);
};

export default KeyboardRow;

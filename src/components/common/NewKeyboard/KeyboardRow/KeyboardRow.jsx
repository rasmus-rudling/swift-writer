import React from "react";
import classes from "./keyboardRow.module.scss";

const KeyboardRow = ({ children }) => {
	return <div className={classes.KeyboardRow}>{children}</div>;
};

export default KeyboardRow;

import React from "react";
import SmallKey from "../SmallKey/SmallKey";
import classes from "./spaceKey.module.scss";

const SpaceKey = ({ chars, extraClasses, keyboardWidth }) => {
	return (
		<SmallKey
			chars={chars}
			extraClasses={[...extraClasses, classes.spaceKey]}
			keyboardWidth={keyboardWidth}
		/>
	);
};

export default SpaceKey;

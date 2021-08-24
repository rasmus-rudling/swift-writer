import React from "react";
import SmallKey from "../SmallKey/SmallKey";
import classes from "./mediumKey.module.scss";

const MediumKey = ({ chars, extraClasses, keyboardWidth }) => {
	return (
		<SmallKey
			chars={chars}
			extraClasses={[...extraClasses, classes.mediumKey]}
			keyboardWidth={keyboardWidth}
		/>
	);
};

export default MediumKey;

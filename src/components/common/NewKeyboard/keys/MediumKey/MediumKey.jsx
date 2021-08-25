import React from "react";
import SmallKey from "../SmallKey/SmallKey";
import classes from "./mediumKey.module.scss";

const MediumKey = ({ chars, extraClasses, keyDistance, rowHeight }) => {
	return (
		<SmallKey
			chars={chars}
			extraClasses={[...extraClasses, classes.mediumKey]}
			keyDistance={keyDistance}
			rowHeight={rowHeight}
		/>
	);
};

export default MediumKey;

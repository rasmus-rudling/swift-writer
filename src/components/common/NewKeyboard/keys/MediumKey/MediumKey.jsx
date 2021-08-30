import React from "react";
import SmallKey from "../SmallKey/SmallKey";
import classes from "./mediumKey.module.scss";

const MediumKey = ({
	chars,
	extraClasses,
	keyDistance,
	rowHeight,
	keyWidth,
}) => {
	return (
		<SmallKey
			chars={chars}
			extraClasses={[...extraClasses, classes.mediumKey]}
			keyDistance={keyDistance}
			rowHeight={rowHeight}
			keyWidth={keyWidth}
		/>
	);
};

export default MediumKey;

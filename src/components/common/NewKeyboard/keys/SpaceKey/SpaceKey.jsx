import React from "react";
import SmallKey from "../SmallKey/SmallKey";
import classes from "./spaceKey.module.scss";

const SpaceKey = ({
	chars,
	extraClasses,
	rowHeight,
	keyDistance,
	keyPadding,
}) => {
	return (
		<SmallKey
			chars={chars}
			extraClasses={[...extraClasses, classes.spaceKey]}
			rowHeight={rowHeight}
			keyDistance={keyDistance}
			keyPadding={keyPadding}
		/>
	);
};

export default SpaceKey;

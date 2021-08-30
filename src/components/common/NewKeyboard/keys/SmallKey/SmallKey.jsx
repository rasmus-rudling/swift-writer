import React from "react";
import classes from "./smallKey.module.scss";

const SmallKey = ({
	chars,
	extraClasses,
	keyDistance,
	rowHeight,
	keyPadding,
}) => {
	let smallKeyClass;
	const numChars = chars.length;

	if (numChars === 1) {
		smallKeyClass = classes.oneCharContainer;
	} else if (numChars === 2) {
		smallKeyClass = classes.twoCharsContainer;
	} else if (numChars === 3) {
		smallKeyClass = classes.threeCharsContainer;
	} else if (numChars === 4) {
		smallKeyClass = classes.fourCharsContainer;
	}

	return (
		<div
			className={[smallKeyClass, ...extraClasses].join(" ")}
			style={{
				borderRadius: keyDistance * 1.3,
				marginLeft: keyDistance,
				width: rowHeight,
				padding: keyPadding,
			}}
		>
			{chars.map((key) => (
				<div>{key}</div>
			))}
		</div>
	);
};

export default SmallKey;

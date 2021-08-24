import React from "react";
import classes from "./smallKey.module.scss";

const SmallKey = ({ chars, extraClasses, keyboardWidth }) => {
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

	// console.log(extraClasses);

	return (
		<div
			className={[smallKeyClass, ...extraClasses].join(" ")}
			style={{
				borderRadius: keyboardWidth / 50,
				marginLeft: keyboardWidth / 105,
			}}
		>
			{chars.map((key) => (
				<div>{key}</div>
			))}
		</div>
	);
};

export default SmallKey;

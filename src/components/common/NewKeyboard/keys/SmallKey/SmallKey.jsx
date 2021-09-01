import React from "react";
import classes from "./smallKey.module.scss";

const SmallKey = ({
	chars,
	extraClasses,
	keyDistance,
	rowHeight,
	keyPadding,
	marker,
	keyWidth,
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

	// if (marker !== undefined) {
	// 	console.log(marker);
	// }

	return (
		<div
			className={[smallKeyClass, ...extraClasses].join(" ")}
			style={{
				borderRadius: keyDistance * 1.3,
				marginLeft: keyDistance,
				width: keyWidth === undefined ? rowHeight : keyWidth,
				padding: keyPadding,
			}}
		>
			{chars.map((key) => (
				<div>{key}</div>
			))}

			{marker !== undefined ? (
				<div
					className={classes.marker}
					style={{
						backgroundColor: marker,
						width: rowHeight * 0.4,
						marginLeft: -(rowHeight * 0.4) / 2,
						height: rowHeight * 0.075,
					}}
				/>
			) : null}
		</div>
	);
};

export default SmallKey;

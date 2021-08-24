import React, { useEffect, useState } from "react";
import findStopsInText from "../../../utility/findStopsInText";
import wordsPerMinToUpdateTime from "../../../utility/wordsPerMinToUpdateTime";
import classes from "./headerAnimation.module.scss";
import TextMarker from "../TextMarker/TextMarker";

const HeaderAnimation = ({ headerText, showContentHandler }) => {
	const updateTime = wordsPerMinToUpdateTime(50, headerText);

	const [currentHeaderText, setCurrentHeaderText] = useState(" ");
	const [stops, setStops] = useState(findStopsInText(headerText));
	const [charIdx, setCharIdx] = useState(0);
	const [animationFinished, setAnimationFinished] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (stops.includes(charIdx)) {
				let tempStops = [...stops];
				tempStops.shift();
				setStops(tempStops);
			} else if (charIdx < headerText.length) {
				let newChar = headerText.charAt(charIdx);

				if (charIdx === 0) {
					setCurrentHeaderText(newChar);
				} else {
					setCurrentHeaderText(currentHeaderText.concat(newChar));
				}

				setCharIdx(charIdx + 1);
			} else {
				setAnimationFinished(true);
			}
		}, updateTime);

		showContentHandler(true);
	}, [charIdx, stops]);

	return (
		<h1>
			{currentHeaderText}
			<TextMarker hide={animationFinished} />
		</h1>
	);
};

export default HeaderAnimation;

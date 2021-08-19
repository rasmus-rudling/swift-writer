import React, { useEffect, useState } from "react";
import classes from "./quickPractisePage.module.scss";

import findStopsInText from "../../../utility/findStopsInText";
import wordsPerMinToUpdateTime from "../../../utility/wordsPerMinToUpdateTime";

import TextMarker from "../../common/TextMarker/TextMarker";
import QuickPractiseSettings from "./QuckPractiseSettings/QuckPractiseSettings";

const QuickPractisePage = () => {
	const fullHeaderText = "Quick Practise";
	const updateTime = wordsPerMinToUpdateTime(55, fullHeaderText);

	const [headerText, setHeaderText] = useState(" ");
	const [stops, setStops] = useState(findStopsInText(fullHeaderText));
	const [charIdx, setCharIdx] = useState(0);
	const [animationFinished, setAnimationFinished] = useState(false);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (stops.includes(charIdx)) {
				let tempStops = [...stops];
				tempStops.shift();
				setStops(tempStops);
			} else if (charIdx < fullHeaderText.length) {
				let newChar = fullHeaderText.charAt(charIdx);

				if (charIdx === 0) {
					setHeaderText(newChar);
				} else {
					setHeaderText(headerText.concat(newChar));
				}

				setCharIdx(charIdx + 1);
			} else {
				setAnimationFinished(true);
			}
		}, updateTime);

		setShowContent(true);
	}, [charIdx, stops]);

	return (
		<div className={classes.QuickPractisePageContainer}>
			<div className={classes.QuickPractisePage}>
				<h1>
					{headerText}
					<TextMarker hide={animationFinished} />
				</h1>
				<QuickPractiseSettings showForm={showContent} />
			</div>
		</div>
	);
};

export default QuickPractisePage;

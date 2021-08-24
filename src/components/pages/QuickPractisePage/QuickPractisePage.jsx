import React, { useEffect, useState } from "react";
import classes from "./quickPractisePage.module.scss";

import findStopsInText from "../../../utility/findStopsInText";
import wordsPerMinToUpdateTime from "../../../utility/wordsPerMinToUpdateTime";

import TextMarker from "../../common/TextMarker/TextMarker";
import QuickPractiseSettings from "./QuckPractiseSettings/QuckPractiseSettings";
import HeaderAnimation from "../../common/HeaderAnimation/HeaderAnimation";

const QuickPractisePage = () => {
	const [showContent, setShowContent] = useState(false);

	const showContentHandler = (newShowContent) => {
		setShowContent(newShowContent);
	};

	return (
		<div className={classes.QuickPractisePageContainer}>
			<div className={classes.QuickPractisePage}>
				<HeaderAnimation
					headerText="Quick Practice"
					showContentHandler={showContentHandler}
				/>

				<QuickPractiseSettings showForm={showContent} />
			</div>
		</div>
	);
};

export default QuickPractisePage;

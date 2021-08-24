import React, { useState } from "react";
import classes from "./feedbackPage.module.scss";

import NewKeyboard from "../../common/NewKeyboard/NewKeyboard";
import HeaderAnimation from "../../common/HeaderAnimation/HeaderAnimation";

const FeedbackPage = () => {
	const [showContent, setShowContent] = useState(false);

	const showContentHandler = (newShowContent) => {
		setShowContent(newShowContent);
	};

	return (
		<div className={classes.FeedbackPageContainer}>
			<div className={classes.FeedbackPage}>
				<HeaderAnimation
					headerText="Give Feedback"
					showContentHandler={showContentHandler}
				/>

				<NewKeyboard />
			</div>
		</div>
	);
};

export default FeedbackPage;

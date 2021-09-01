import React, { useState } from "react";
import classes from "./feedbackPage.module.scss";

import NewKeyboard from "../../common/NewKeyboard/NewKeyboard";
import HeaderAnimation from "../../common/HeaderAnimation/HeaderAnimation";
import LeftHand from "../../common/newHands/LeftHand/LeftHand";
import RightHand from "../../common/newHands/RightHand/RightHand";

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

                <div style={{
                    width: "100px"
                }}>
                    <LeftHand />
                </div>
			</div>
		</div>
	);
};

export default FeedbackPage;

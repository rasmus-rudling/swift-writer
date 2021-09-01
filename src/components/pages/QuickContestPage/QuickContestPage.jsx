import React from "react";
import classes from "./quickContestPage.module.scss";

import QuickContestSettings from "./QuickContestSettings/QuickContestSettings";
import HeaderAnimation from "../../common/HeaderAnimation/HeaderAnimation";
import { useState } from "react";

const QuickContestPage = () => {
	const [showContent, setShowContent] = useState(false);

	const showContentHandler = (newShowContent) => {
		setShowContent(newShowContent);
	};

	return (
		<div className={classes.QuickContestPageContainer}>
			<div className={classes.QuickContestPage}>
				<HeaderAnimation
					headerText="Quick Contest"
					showContentHandler={showContentHandler}
				/>

				<QuickContestSettings showForm={showContent} />
			</div>
		</div>
	);
};

export default QuickContestPage;

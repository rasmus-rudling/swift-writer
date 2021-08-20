import React from "react";
import classes from "./mainNavigation.module.scss";
import { useHistory } from "react-router-dom";

import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const MainNavigation = () => {
	const history = useHistory();
	let menuClasses = [classes.MainNavigation];

	return (
		<div className={menuClasses.join(" ")}>
			<div className={classes.logo} onClick={() => history.push("/")}>
				SwiftWriter
			</div>

			<div className={classes.desktopNavContainer}>
				<DesktopNavigation />
			</div>

			<div className={classes.mobileNavContainer}>
				<MobileNavigation />
			</div>
		</div>
	);
};

export default MainNavigation;

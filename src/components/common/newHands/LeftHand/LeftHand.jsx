import React, { useEffect, useRef, useState } from "react";
import classes from "./leftHand.module.scss";

import leftHand from "../../../../resources/images/hands/leftHand.svg";
import FingerIndicator from "../FingerIndicator/FingerIndicator";

const LeftHand = ({ highlightedFingers, updateTime, extraClass }) => {
	let leftHandRef = useRef();
	const [indicatorHeight, setIndicatorHeight] = useState(0);
	const [indicatorBorderRadius, setIndicatorBorderRadius] = useState(0);
	const [handPaddingTop, setHandPaddingTop] = useState([0, 0, 0]);

	let handClasses = [classes.LeftHand];

	if (extraClass !== undefined) {
		handClasses.push(extraClass);
	}

	const handleResize = () => {
		let handHeight = leftHandRef.current.offsetHeight;

		setIndicatorHeight(handHeight * 0.16);
		setIndicatorBorderRadius(handHeight * 0.025);

		setHandPaddingTop(handHeight * 0.04);
		console.log("asd");
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={classes.LeftHandContainer}
			style={{
				paddingTop: handPaddingTop,
			}}
		>
			<FingerIndicator
				color="red"
				top={indicatorHeight * 1.5}
				left="0px"
				// show = {highlightedFingers["pinkyL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="blue"
				top={indicatorHeight * 0.22}
				left={indicatorHeight * 1.025}
				// show = {highlightedFingers["ringL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="orange"
				top="0"
				left={indicatorHeight * 2.1}
				// show = {highlightedFingers["middleL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="green"
				top={indicatorHeight * 0.23}
				left={indicatorHeight * 3.23}
				// show = {highlightedFingers["indexL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="purple"
				top={indicatorHeight * 2.7}
				right="0"
				// show = {highlightedFingers["thumbL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>
			<div className={handClasses.join(" ")} ref={leftHandRef}>
				<img src={leftHand} onLoad={handleResize} alt="A left hand" />
			</div>
		</div>
	);
};

export default LeftHand;

import React, { useEffect, useRef, useState } from "react";
import classes from "./rightHand.module.scss";

import rightHand from "../../../../resources/images/hands/rightHand.svg";
import FingerIndicator from "../FingerIndicator/FingerIndicator";

const RightHand = ({ highlightedFingers, updateTime, extraClass }) => {
	let rightHandRef = useRef();
	const [indicatorHeight, setIndicatorHeight] = useState(0);
	const [indicatorBorderRadius, setIndicatorBorderRadius] = useState(0);
	const [handPaddingTop, setHandPaddingTop] = useState([0, 0, 0]);

	let handClasses = [classes.RightHand];

	if (extraClass !== undefined) {
		handClasses.push(extraClass);
	}

	const handleResize = () => {
		let handHeight = rightHandRef.current.offsetHeight;

		setIndicatorHeight(handHeight * 0.16);
		setIndicatorBorderRadius(handHeight * 0.025);

		setHandPaddingTop(handHeight * 0.04);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={classes.RightHandContainer}
			style={{
				paddingTop: handPaddingTop,
			}}
		>
			<FingerIndicator
				color="red"
				top={indicatorHeight * 0.22}
				left={indicatorHeight * 1.55}
				// show = {highlightedFingers["pinkyL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="blue"
				top="0"
				left={indicatorHeight * 2.63}
				// show = {highlightedFingers["ringL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="orange"
				top={indicatorHeight * 0.25}
				left={indicatorHeight * 3.75}
				// show = {highlightedFingers["middleL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="green"
				top={indicatorHeight * 1.5}
				right="0"
				// show = {highlightedFingers["indexL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>

			<FingerIndicator
				color="purple"
				top={indicatorHeight * 2.7}
				left="0"
				// show = {highlightedFingers["thumbL"]}
				show={true}
				updateTime={updateTime}
				height={indicatorHeight}
				borderRadius={indicatorBorderRadius}
			/>
			<div className={handClasses.join(" ")} ref={rightHandRef}>
				<img src={rightHand} onLoad={handleResize} alt="A right hand" />
			</div>
		</div>
	);
};

export default RightHand;

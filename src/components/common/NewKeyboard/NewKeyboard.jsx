import React from "react";
import classes from "./newKeyboard.module.scss";
import keyClasses from "./keys/commonKeysClasses.module.scss";

import SmallKey from "./keys/SmallKey/SmallKey";

import Row from "./KeyboardRow/KeyboardRow";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const NewKeyboard = () => {
	const keyboardRef = useRef(null);

	const [keyboardDim, setKeyboardDim] = useState({
		height: 0,
		width: 0,
	});

	const handleResize = () => {
		const newKeyboardDim = {
			height: keyboardRef.current.offsetHeight,
			width: keyboardRef.current.offsetWidth,
		};
		setKeyboardDim(newKeyboardDim);
	};

	useEffect(() => {
		const keyboardDimInit = {
			height: keyboardRef.current.offsetHeight,
			width: keyboardRef.current.offsetWidth,
		};
		setKeyboardDim(keyboardDimInit);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={classes.NewKeyboard}
			ref={keyboardRef}
			style={{
				fontSize: keyboardDim.width / 50,
				height: keyboardDim.width / 2.5,
			}}
		>
			<Row>
				<SmallKey
					chars={["§", "½", "¶", "|"]}
					extraClasses={[keyClasses.redKey]}
				/>
				<SmallKey
					chars={["!", "1"]}
					extraClasses={[keyClasses.blueKey]}
				/>
				<SmallKey
					chars={['"', "2", "@"]}
					extraClasses={[keyClasses.orangeKey]}
				/>
				<SmallKey chars={["K"]} extraClasses={[keyClasses.greenKey]} />
			</Row>

			<Row>
				<SmallKey
					chars={["§", "½", "¶", "|"]}
					extraClasses={[keyClasses.redKey]}
				/>
				<SmallKey
					chars={["!", "1"]}
					extraClasses={[keyClasses.blueKey]}
				/>
				<SmallKey
					chars={['"', "2", "@"]}
					extraClasses={[keyClasses.orangeKey]}
				/>
				<SmallKey chars={["K"]} extraClasses={[keyClasses.greenKey]} />
			</Row>
		</div>
	);
};

export default NewKeyboard;
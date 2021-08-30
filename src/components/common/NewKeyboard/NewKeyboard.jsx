import React from "react";
import classes from "./newKeyboard.module.scss";
import keyClasses from "./keys/commonKeysClasses.module.scss";

import SmallKey from "./keys/SmallKey/SmallKey";

import Row from "./KeyboardRow/KeyboardRow";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import MediumKey from "./keys/MediumKey/MediumKey";
import SpaceKey from "./keys/SpaceKey/SpaceKey";

import { swedishKeyboard } from "../../../utility/keyboards";

const NewKeyboard = () => {
	const keyboardRef = useRef(null);

	const numKeyRows = swedishKeyboard.keysInRow.length;

	const keysKeys = Object.keys(swedishKeyboard.keys);

	let initActiveKeys = {};

	keysKeys.forEach((keyKey) => {
		initActiveKeys[keyKey] = false;
	});

	const [activeKeys, setActiveKeys] = useState(initActiveKeys);

	const [keyDistance, setKeyDistance] = useState(0);
	const [rowHeight, setRowHeight] = useState(0);
	const [keyboardPadding, setKeyboardPadding] = useState(0);
	const [keyPadding, setKeyPadding] = useState(0);
	const [keyboardDim, setKeyboardDim] = useState({
		height: 0,
		width: 0,
	});

	const handleResize = () => {
		const newKeyboardDim = {
			height: keyboardRef.current.offsetHeight,
			width: keyboardRef.current.offsetWidth,
		};

		let newKeyboardPadding = newKeyboardDim.width / 50;
		let newKeyDistance = newKeyboardDim.width / 105;
		let newRowHeight =
			(newKeyboardDim.height -
				(numKeyRows - 1) * newKeyDistance -
				2 * newKeyboardPadding) /
			numKeyRows;
		let newKeyPadding = newKeyboardDim.width / 280;

		setKeyDistance(newKeyDistance);
		setKeyboardPadding(newKeyboardPadding);
		setRowHeight(newRowHeight);
		setKeyboardDim(newKeyboardDim);
		setKeyPadding(newKeyPadding);
	};

	const handleMutate = () => {
		const keyboardDimInit = {
			height: keyboardRef.current.offsetHeight,
			width: keyboardRef.current.offsetWidth,
		};

		let newKeyboardPadding = keyboardDimInit.width / 50;
		let newKeyDistance = keyboardDimInit.width / 105;
		let newRowHeight =
			(keyboardDimInit.height -
				(numKeyRows - 1) * newKeyDistance -
				2 * newKeyboardPadding) /
			numKeyRows;
		let newKeyPadding = keyboardDimInit.width / 280;

		setKeyboardPadding(newKeyboardPadding);
		setKeyDistance(newKeyDistance);
		setRowHeight(newRowHeight);
		setKeyboardDim(keyboardDimInit);
		setKeyPadding(newKeyPadding);
	};

	const activateKey = (char) => {};

	useEffect(() => {
		handleResize();

		let observer = new MutationObserver(handleMutate);
		let config = { attributes: true, childList: true, characterData: true };
		observer.observe(keyboardRef.current, config);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			observer.disconnect();
		};
	}, []);

	return (
		<div
			className={classes.NewKeyboard}
			ref={keyboardRef}
			style={{
				fontSize: keyboardDim.width / 60,
				height: keyboardDim.width / 2.8,
				padding: keyboardPadding,
				paddingTop: keyboardPadding - keyDistance,
				paddingLeft: keyboardPadding - keyDistance,
			}}
		>
			{swedishKeyboard.keysInRow.map((numKeysInRow, idx) => {
				const numKeysInRowArray = Array.from(
					{ length: numKeysInRow },
					(v, k) => k
				);

				let numPrevKeys = 0;

				for (let i = 0; i < idx; i++) {
					numPrevKeys += swedishKeyboard.keysInRow[i];
				}

				return (
					<Row keyDistance={keyDistance} rowHeight={rowHeight}>
						{numKeysInRowArray.map((keyIdx) => {
							let totIdx = numPrevKeys + keyIdx;
							let keyKey = keysKeys[totIdx];
							let keyObj = swedishKeyboard.keys[keyKey];

							let keyClass;

							if (
								keyObj.finger === "pinkyL" ||
								keyObj.finger === "indexR"
							) {
								keyClass = keyClasses.redKey;
							} else if (
								keyObj.finger === "ringL" ||
								keyObj.finger === "middleR"
							) {
								keyClass = keyClasses.blueKey;
							} else if (
								keyObj.finger === "middleL" ||
								keyObj.finger === "ringR"
							) {
								keyClass = keyClasses.orangeKey;
							} else if (
								keyObj.finger === "indexL" ||
								keyObj.finger === "pinkyR"
							) {
								keyClass = keyClasses.greenKey;
							} else if (keyObj.finger === "thumb") {
								keyClass = keyClasses.purpleKey;
							}

							if (keyObj.keyType === "small") {
								return (
									<SmallKey
										chars={keyObj.chars}
										extraClasses={[keyClass]}
										rowHeight={rowHeight}
										keyDistance={keyDistance}
										keyPadding={keyPadding}
										marker={keyObj.marker}
									/>
								);
							} else if (keyObj.keyType === "medium") {
								return (
									<MediumKey
										chars={keyObj.chars}
										rowHeight={rowHeight}
										extraClasses={[keyClass]}
										keyDistance={keyDistance}
										keyPadding={keyPadding}
										keyWidth={rowHeight * keyObj.scaler}
									/>
								);
							}
							return null;
						})}
					</Row>
				);
			})}
		</div>
	);
};

export default NewKeyboard;

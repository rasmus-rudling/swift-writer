import React from "react";
import classes from "./newKeyboard.module.scss";
import keyClasses from "./keys/commonKeysClasses.module.scss";

import SmallKey from "./keys/SmallKey/SmallKey";

import Row from "./KeyboardRow/KeyboardRow";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import MediumKey from "./keys/MediumKey/MediumKey";

const keyboardInfo = {
	charToKeyMapping: {
		"§": "§½¶",
		"½": "§½¶",
		"¶": "§½¶",
		1: "1!¡",
		"!": "1!¡",
		"¡": "1!¡",
		2: '2"@',
		'"': '2"@',
		"@": '2"@',
		3: "3#£",
		"#": "3#£",
		"£": "3#£",
		4: "4¤$",
		"¤": "4¤$",
		$: "4¤$",
		5: "5%€",
		"%": "5%€",
		"€": "5%€",
		6: "6&¥",
		"&": "6&¥",
		"¥": "6&¥",
		7: "7/{",
		"/": "7/{",
		"{": "7/{",
		8: "8([",
		"(": "8([",
		"[": "8([",
		9: "9)]",
		")": "9)]",
		"]": "9)]",
		0: "0=}",
		"=": "0=}",
		"}": "0=}",
		"+": "+?\\",
		"?": "+?\\",
		"\\": "+?\\",
		"´": "´`±",
		"`": "´`±",
		"±": "´`±",
		"¨": "¨^~",
		"^": "¨^~",
		"~": "¨^~",
		"'": "'*",
		"*": "'*",
		",": ",;",
		";": ",;",
		".": ".:",
		":": ".:",
		"-": "-_",
		_: "-_",
		"<": "<>|",
		">": "<>|",
		"|": "<>|",
	},

	keysInRow: [14, 13, 14, 12, 4],

	keys: {
		"§½¶": {
			chars: ["§", "½", "¶"],
			finger: "pinkyL",
			keyType: "small",
		},
		"1!¡": {
			chars: ["1", "!¡", "¡"],
			finger: "pinkyL",
			keyType: "small",
		},
		'2"@': {
			chars: ["2", '"', "@"],
			finger: "ringL",
			keyType: "small",
		},
		"3#£": {
			chars: ["3", "#", "£"],
			finger: "middleL",
			keyType: "small",
		},
		"4¤$": {
			chars: ["4", "", ""],
			finger: "indexL",
			keyType: "small",
		},
		"5%€": {
			chars: ["5", "%", "€"],
			finger: "indexL",
			keyType: "small",
		},
		"6&¥": {
			chars: ["6", "&", "¥"],
			finger: "indexR",
			keyType: "small",
		},
		"7/{": {
			chars: ["7", "/", "{"],
			finger: "indexR",
			keyType: "small",
		},
		"8([": {
			chars: ["8", "(", "["],
			finger: "middleR",
			keyType: "small",
		},
		"9)]": {
			chars: ["9", ")", "]"],
			finger: "ringR",
			keyType: "small",
		},
		"0=}": {
			chars: ["0", "=", "}"],
			finger: "pinkyR",
			keyType: "small",
		},
		"+?\\": {
			chars: ["+", "?", "\\"],
			finger: "pinkyR",
			keyType: "small",
		},
		"´`±": {
			chars: ["´", "`", "±"],
			finger: "pinkyR",
			keyType: "small",
		},
		"← Back": {
			chars: ["← Back"],
			finger: "pinkyR",
			keyType: "medium",
			scaler: 3,
		},

		"Tab ↹": {
			chars: ["Tab ↹"],
			finger: "pinkyL",
			keyType: "medium",
		},
		Q: {
			chars: ["Q"],
			finger: "pinkyL",
			keyType: "small",
		},
		W: {
			chars: ["W"],
			finger: "ringL",
			keyType: "small",
		},
		E: {
			chars: ["E"],
			finger: "middleL",
			keyType: "small",
		},
		R: {
			chars: ["R"],
			finger: "indexL",
			keyType: "small",
		},
		T: {
			chars: ["T"],
			finger: "indexL",
			keyType: "small",
		},
		Y: {
			chars: ["Y"],
			finger: "indexR",
			keyType: "small",
		},
		U: {
			chars: ["U"],
			finger: "indexR",
			keyType: "small",
		},
		I: {
			chars: ["I"],
			finger: "middleR",
			keyType: "small",
		},
		O: {
			chars: ["O"],
			finger: "ringR",
			keyType: "small",
		},
		P: {
			chars: ["P"],
			finger: "pinkyR",
			keyType: "small",
		},
		Å: {
			chars: ["Å"],
			finger: "pinkyR",
			keyType: "small",
		},
		"¨": {
			chars: ["¨", "^", "~"],
			finger: "pinkyR",
			keyType: "small",
		},
		CapsLock: {
			chars: ["CapsLock"],
			finger: "pinkyL",
			keyType: "medium",
		},
		A: {
			chars: ["A"],
			finger: "pinkyL",
			keyType: "small",
		},
		S: {
			chars: ["S"],
			finger: "ringL",
			keyType: "small",
		},
		D: {
			chars: ["D"],
			finger: "middleL",
			keyType: "small",
		},
		F: {
			chars: ["F"],
			finger: "indexL",
			keyType: "small",
		},
		G: {
			chars: ["G"],
			finger: "indexL",
			keyType: "small",
		},
		H: {
			chars: ["H"],
			finger: "indexR",
			keyType: "small",
		},
		J: {
			chars: ["J"],
			finger: "indexR",
			keyType: "small",
		},
		K: {
			chars: ["K"],
			finger: "middleR",
			keyType: "small",
		},
		L: {
			chars: ["L"],
			finger: "ringR",
			keyType: "small",
		},
		Ö: {
			chars: ["Ö"],
			finger: "pinkyR",
			keyType: "small",
		},
		Ä: {
			chars: ["Ä"],
			finger: "pinkyR",
			keyType: "small",
		},
		"'*": {
			chars: ["'", "*"],
			finger: "pinkyR",
			keyType: "small",
		},
		"↲ Enter": {
			chars: ["↲ Enter"],
			finger: "pinkyR",
			keyType: "medium",
		},
		"⇧ Shift": {
			chars: ["⇧ Shift"],
			finger: "pinkyL",
			keyType: "medium",
		},
		"<>|": {
			chars: ["<", ">", "|"],
			finger: "pinkyL",
			keyType: "small",
		},
		Z: {
			chars: ["Z"],
			finger: "pinkyL",
			keyType: "small",
		},
		X: {
			chars: ["X"],
			finger: "ringL",
			keyType: "small",
		},
		C: {
			chars: ["C"],
			finger: "middleL",
			keyType: "small",
		},
		V: {
			chars: ["V"],
			finger: "indexL",
			keyType: "small",
		},
		B: {
			chars: ["B"],
			finger: "indexL",
			keyType: "small",
		},
		N: {
			chars: ["N"],
			finger: "indexR",
			keyType: "small",
		},
		M: {
			chars: ["M"],
			finger: "indexR",
			keyType: "small",
		},
		",;": {
			chars: [",", ";"],
			finger: "middleR",
			keyType: "small",
		},
		".:": {
			chars: [".", ":"],
			finger: "ringR",
			keyType: "small",
		},
		"-_": {
			chars: ["-", "_"],
			finger: "pinkyR",
			keyType: "small",
		},
		Ctrl: {
			chars: ["Ctrl"],
			finger: "pinkyL",
			keyType: "small",
		},
		Alt: {
			chars: ["Alt"],
			finger: "pinkyL",
			keyType: "small",
		},
		Space: {
			chars: ["Space"],
			finger: "thumb",
			keyType: "space",
		},
		"Alt Gr": {
			chars: ["Alt Gr"],
			finger: "ringR",
			keyType: "small",
		},
	},
};

const NewKeyboard = () => {
	const keyboardRef = useRef(null);

	const numKeyRows = keyboardInfo.keysInRow.length;

	const keysKeys = Object.keys(keyboardInfo.keys);

	let initActiveKeys = {};

	keysKeys.forEach((keyKey) => {
		initActiveKeys[keyKey] = false;
	});

	const [activeKeys, setActiveKeys] = useState(initActiveKeys);

	const [keyDistance, setKeyDistance] = useState(0);
	const [rowHeight, setRowHeight] = useState(0);
	const [keyboardPadding, setKeyboardPadding] = useState(0);
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

		console.log("Good:", newKeyboardDim.height);

		setKeyDistance(newKeyDistance);
		setKeyboardPadding(newKeyboardPadding);

		setRowHeight(newRowHeight);

		setKeyboardDim(newKeyboardDim);
	};

	const activateKey = (char) => {};

	useEffect(() => {
		const keyboardRefObj = keyboardRef.current;

		console.log("Bad:", keyboardRefObj.offsetHeight);

		const keyboardDimInit = {
			height: keyboardRefObj.offsetHeight,
			width: keyboardRefObj.offsetWidth,
		};

		let newKeyboardPadding = keyboardDimInit.width / 50;
		let newKeyDistance = keyboardDimInit.width / 105;
		let newRowHeight =
			(keyboardDimInit.height -
				(numKeyRows - 1) * newKeyDistance -
				2 * newKeyboardPadding) /
			numKeyRows;

		setKeyboardPadding(newKeyboardPadding);
		setKeyDistance(newKeyDistance);
		setRowHeight(newRowHeight);
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
				height: keyboardDim.width / 3,
				padding: keyboardPadding,
				paddingTop: keyboardPadding - keyDistance,
				paddingLeft: keyboardPadding - keyDistance,
			}}
		>
			{/* {keyboardInfo.keysInRow.map((numKeysInRow, idx) => {
				const numKeysInRowArray = Array.from(
					{ length: numKeysInRow },
					(v, k) => k
				);

				let numPrevKeys = 0;

				for (let i = 0; i < idx; i++) {
					numPrevKeys += keyboardInfo.keysInRow[i];
				}

				return (
					<Row keyDistance={keyDistance} rowHeight={rowHeight}>
						{numKeysInRowArray.map((keyIdx) => {
							let totIdx = numPrevKeys + keyIdx;
							let keyKey = keysKeys[totIdx];
							let keyObj = keyboardInfo.keys[keyKey];

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
							} else if (keyObj.finger === "space") {
								keyClass = keyClasses.purpleKey;
							}

							if (keyObj.keyType === "small") {
								return (
									<SmallKey
										chars={keyObj.chars}
										extraClasses={[keyClass]}
										rowHeight={rowHeight}
										keyDistance={keyDistance}
									/>
								);
							} else if (keyObj.keyType === "medium") {
								return (
									<MediumKey
										chars={keyObj.chars}
										rowHeight={rowHeight}
										extraClasses={[keyClass]}
										keyDistance={keyDistance}
									/>
								);
							} else if (keyObj.keyType === "space") {
							}
							return null;
						})}
					</Row>
				);
			})} */}
		</div>
	);
};

export default NewKeyboard;

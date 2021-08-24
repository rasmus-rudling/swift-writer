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

	const keysKeys = Object.keys(keyboardInfo.keys);

	let initActiveKeys = {};

	keysKeys.forEach((keyKey) => {
		initActiveKeys[keyKey] = false;
	});

	const [activeKeys, setActiveKeys] = useState(initActiveKeys);

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

	const activateKey = (char) => {};

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
				height: keyboardDim.width / 2.85,
				padding: keyboardDim.width / 50,
				paddingTop: keyboardDim.width / 50 - keyboardDim.width / 105,
				paddingLeft: keyboardDim.width / 50 - keyboardDim.width / 105,
			}}
		>
			{keyboardInfo.keysInRow.map((numKeysInRow, idx) => {
				const numKeysInRowArray = Array.from(
					{ length: numKeysInRow },
					(v, k) => k
				);

				let numPrevKeys = 0;

				for (let i = 0; i < idx; i++) {
					numPrevKeys += keyboardInfo.keysInRow[i];
				}

				return (
					<Row keyboardWidth={keyboardDim.width}>
						{numKeysInRowArray.map((keyIdx) => {
							let totIdx = numPrevKeys + keyIdx;
							let keyKey = keysKeys[totIdx];
							let keyObj = keyboardInfo.keys[keyKey];

							console.log(totIdx);
							console.log(keyKey);
							console.log("");

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
										keyboardWidth={keyboardDim.width}
									/>
								);
							} else if (keyObj.keyType === "medium") {
								return (
									<MediumKey
										chars={keyObj.chars}
										extraClasses={[keyClass]}
										keyboardWidth={keyboardDim.width}
									/>
								);
							} else if (keyObj.keyType === "space") {
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

import React from "react";
import classes from "./keyboard.module.scss";
import Key from "./Key/Key";

const Keyboard = ({
	keys,
	keyEnter,
	keyLeave,
	clearIndicators,
	activeKey,
	updateTime,
	allKeysActive,
	extraClass,
}) => {
	let keyboardClasses = [classes.Keyboard];

	if (extraClass !== undefined) {
		keyboardClasses.push(extraClass);
	}

	const keyIsActive = (_key) => {
		if (_key.char === "Space") {
			return activeKey === " ";
		} else {
			if (activeKey !== undefined) {
				return activeKey.toUpperCase() === _key.char;
			} else {
				return false;
			}
		}
	};

	return (
		<div
			className={keyboardClasses.join(" ")}
			onMouseEnter={clearIndicators}
		>
			{keys.map((keyRow) => (
				<div className={classes.row}>
					{keyRow.map((key) => (
						<Key
							char={key.char}
							shiftChar={key.shiftChar}
							altChar={key.altGrChar}
							width={key.width}
							finger={key.finger}
							keyLeave={keyLeave}
							keyEnter={keyEnter}
							active={keyIsActive(key)}
							updateTime={updateTime}
							allKeysActive={allKeysActive}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Keyboard;

import React from 'react';
import classes from './keyboard.module.scss';
import Key from './Key/Key';

const Keyboard = ({keys}) => {
    return (
        <div className={classes.Keyboard}>
            {
                keys.map(keyRow => (
                    <div className={classes.row}>
                        {
                            keyRow.map(key => (
                                <Key 
                                    char = {key.char}
                                    shiftChar = {key.shiftChar} 
                                    altGrChar = {key.altChar}
                                    width = {key.width}
                                    finger = {key.finger}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Keyboard;
import React from 'react';
import classes from './sweWinKeyboard.module.scss';

import Keyboard from '../../../KeyBoard/Keyboard';

const SweWinKeyboard = ({keyEnter, keyLeave, clearIndicators}) => {
    const defaultWidth = '50px';
    let sweWinKeys = [
        [
            {"char":'§', "shiftChar":'½', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'1', "shiftChar":'!', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'2', "shiftChar":'"', "altGrChar":'@', "width":defaultWidth, "finger":"ringL"},
            {"char":'3', "shiftChar":'#', "altGrChar":'£', "width":defaultWidth, "finger":"middleL"},
            {"char":'4', "shiftChar":'¤', "altGrChar":'$', "width":defaultWidth, "finger":"indexL"},
            {"char":'5', "shiftChar":'%', "altGrChar":'€', "width":defaultWidth, "finger":"indexL"},
            {"char":'6', "shiftChar":'&', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'7', "shiftChar":'/', "altGrChar":'{', "width":defaultWidth, "finger":"indexR"},
            {"char":'8', "shiftChar":'(', "altGrChar":'[', "width":defaultWidth, "finger":"middleR"},
            {"char":'9', "shiftChar":')', "altGrChar":']', "width":defaultWidth, "finger":"ringR"},
            {"char":'0', "shiftChar":'=', "altGrChar":'}', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'+', "shiftChar":'?', "altGrChar":'\\', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'´', "shiftChar":'`', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"← Back", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyR"}
        ],
        [
            {"char":'Tab ↹', "shiftChar":'', "altGrChar":'', "width":"75px", "finger":"pinkyL"},
            {"char":'q', "shiftChar":'Q', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'w', "shiftChar":'W', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":'e', "shiftChar":'E', "altGrChar":'€', "width":defaultWidth, "finger":"middleL"},
            {"char":'r', "shiftChar":'R', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'t', "shiftChar":'T', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'y', "shiftChar":'Y', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'u', "shiftChar":'U', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'i', "shiftChar":'I', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":'o', "shiftChar":'O', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":'p', "shiftChar":'P', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'å', "shiftChar":'Å', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'¨', "shiftChar":'^', "altGrChar":'~', "width":defaultWidth, "finger":"pinkyR"},
        ], 
        [
            {"char":'CapsLock', "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyL"},
            {"char":'a', "shiftChar":'A', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'s', "shiftChar":'S', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":'d', "shiftChar":'D', "altGrChar":'', "width":defaultWidth, "finger":"middleL"},
            {"char":'f', "shiftChar":'F', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'g', "shiftChar":'G', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'h', "shiftChar":'H', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'j', "shiftChar":'J', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'k', "shiftChar":'K', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":'l', "shiftChar":'L', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":'ö', "shiftChar":'Ö', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'ä', "shiftChar":'Ä', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"'", "shiftChar":'*', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"↲ Enter", "shiftChar":'', "altGrChar":'', "width":"75px", "finger":"pinkyR"}
        ],
        [
            {"char":"⇧ Shift", "shiftChar":'', "altGrChar":'', "width":"70px", "finger":"pinkyL"},
            {"char":"<", "shiftChar":'>', "altGrChar":'|', "width":defaultWidth, "finger":"pinkyL"},
            {"char":"z", "shiftChar":'Z', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":"x", "shiftChar":'X', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":"c", "shiftChar":'C', "altGrChar":'', "width":defaultWidth, "finger":"middleL"},
            {"char":"v", "shiftChar":'V', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":"b", "shiftChar":'B', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":"n", "shiftChar":'N', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":"m", "shiftChar":'M', "altGrChar":'µ', "width":defaultWidth, "finger":"indexR"},
            {"char":",", "shiftChar":';', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":".", "shiftChar":':', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":"-", "shiftChar":'_', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"⇧ Shift", "shiftChar":'_', "altGrChar":'', "width":"85px", "finger":"pinkyR"},
        ],
        [
            {"char":"Ctrl", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyL"},
            {"char":"win", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":"Alt", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyL"},
            {"char":"Space", "shiftChar":'', "altGrChar":'', "width":"350px", "finger":"thumbR"},
            {"char":"Alt Gr", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"ringR"},
            {"char":"Fn", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyR"},
        ]
    ];

    return (
        <Keyboard 
            keys = {sweWinKeys}
            keyEnter = {keyEnter}
            keyLeave = {keyLeave}
            clearIndicators = {clearIndicators}
        />
    )
}

export default SweWinKeyboard;
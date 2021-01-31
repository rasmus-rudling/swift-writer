import React from 'react';
import classes from './sweWinKeyboard.module.scss';

import Keyboard from '../../../KeyBoard/Keyboard';

const SweWinKeyboard = ({
    keyEnter, 
    keyLeave, 
    clearIndicators, 
    activeKey,
    updateTime,
    allKeysActive,
    extraClass
}) => {
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
            {"char":'Q', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'W', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":'E', "shiftChar":'', "altGrChar":'€', "width":defaultWidth, "finger":"middleL"},
            {"char":'R', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'T', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'Y', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'U', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'I', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":'O', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":'P', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'Å', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'¨', "shiftChar":'^', "altGrChar":'~', "width":defaultWidth, "finger":"pinkyR"},
        ], 
        [
            {"char":'CapsLock', "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyL"},
            {"char":'A', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":'S', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":'D', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"middleL"},
            {"char":'F', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'G', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":'H', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'J', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":'K', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":'L', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":'Ö', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":'Ä', "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"'", "shiftChar":'*', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"↲ Enter", "shiftChar":'', "altGrChar":'', "width":"75px", "finger":"pinkyR"}
        ],
        [
            {"char":"⇧ Shift", "shiftChar":'', "altGrChar":'', "width":"75px", "finger":"pinkyL"},
            {"char":"<", "shiftChar":'>', "altGrChar":'|', "width":defaultWidth, "finger":"pinkyL"},
            {"char":"Z", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"pinkyL"},
            {"char":"Z", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"ringL"},
            {"char":"C", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"middleL"},
            {"char":"V", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":"B", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexL"},
            {"char":"N", "shiftChar":'', "altGrChar":'', "width":defaultWidth, "finger":"indexR"},
            {"char":"M", "shiftChar":'', "altGrChar":'µ', "width":defaultWidth, "finger":"indexR"},
            {"char":",", "shiftChar":';', "altGrChar":'', "width":defaultWidth, "finger":"middleR"},
            {"char":".", "shiftChar":':', "altGrChar":'', "width":defaultWidth, "finger":"ringR"},
            {"char":"-", "shiftChar":'_', "altGrChar":'', "width":defaultWidth, "finger":"pinkyR"},
            {"char":"⇧ Shift", "shiftChar":'_', "altGrChar":'', "width":"85px", "finger":"pinkyR"},
        ],
        [
            {"char":"Ctrl", "shiftChar":'', "altGrChar":'', "width":"85px", "finger":"pinkyL"},
            {"char":"win", "shiftChar":'', "altGrChar":'', "width":"51px", "finger":"pinkyL"},
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
            activeKey = {activeKey}
            updateTime = {updateTime}
            allKeysActive = {allKeysActive}
            extraClass = {extraClass}
        />
    )
}

export default SweWinKeyboard;
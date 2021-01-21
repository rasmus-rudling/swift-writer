import React from 'react';
import classes from './keyboard.module.scss';
import Key from './Key/key';

const Keyboard = () => {
    return (
        <div className={classes.Keyboard}>
            <div className={classes.row1}>
                <Key char='§' shiftChar='½' />
                <Key char='1' shiftChar='!' />
                <Key char='2' shiftChar='"' altChar='@' />
                <Key char='3' shiftChar='#' altChar='£' />
                <Key char='4' shiftChar='¤' altChar='$' />
                <Key char='5' shiftChar='%' altChar='€' />
                <Key char='6' shiftChar='&' />
                <Key char='7' shiftChar='/' altChar='{' />
                <Key char='8' shiftChar='(' altChar='[' />
                <Key char='9' shiftChar=')' altChar=']' />
                <Key char='0' shiftChar='=' altChar='}' />
                <Key char='+' shiftChar='?' altChar='\' />
                <Key char='´' shiftChar='`' />
            </div>

            <div className={classes.row2}>
                <Key char='Tab ↹' shiftChar='' altChar='' width="85px"/>
                <Key char='Q' />
                <Key char='W' />
                <Key char='E' altChar='€' />
                <Key char='R' />
                <Key char='T' />
                <Key char='Y' />
                <Key char='U' />
                <Key char='I' />
                <Key char='O' />
                <Key char='P' />
                <Key char='Å' />
                <Key char='¨' shiftChar='^' altChar='~' />
            </div>

            <div className={classes.row3}>
                <Key char='CapsLock' shiftChar='' altChar='' width="85px"/>
                <Key char='A' />
                <Key char='S' />
                <Key char='D' />
                <Key char='F' />
                <Key char='G' />
                <Key char='H' />
                <Key char='J' />
                <Key char='K' />
                <Key char='L' />
                <Key char='Ö' />
                <Key char='Ä' />
                <Key char="'" shiftChar='*' />
            </div>

            <div className={classes.row4}>
                <Key char='⇧ Shift' width="85px"/>
                <Key char='<' shiftChar='>' altChar='|' />
                <Key char='Z' />
                <Key char='X' />
                <Key char='C' />
                <Key char='V' />
                <Key char='B' />
                <Key char='N' />
                <Key char='M' altChar='µ' />
                <Key char=',' shiftChar=';'/>
                <Key char='.' shiftChar=':'/>
                <Key char='-' shiftChar='_' />
            </div>
        </div>
    )
}

export default Keyboard;
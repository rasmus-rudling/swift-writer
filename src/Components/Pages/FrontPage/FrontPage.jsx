import React, { useState, useEffect } from 'react';
import classes from './frontPage.module.scss';
import { withStyles } from '@material-ui/core/styles'

import KeyboardContainer from './KeyboardContainer/KeyboardContainer';

import WelcomeAnimation from './WelcomeAnimation/WelcomeAnimation';
import Slider from '@material-ui/core/Slider';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import findStopsInText from '../../Utility/findStopsInText';
import wordsPerMinToUpdateTime from '../../Utility/wordsPerMinToUpdateTime';


const PrettoSlider = withStyles({
    root: {
      color: '#FE6E6E',
      height: 10,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '3px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 2px)',
    },
    track: {
      height: 8,
      borderRadius: 0,
    },
    rail: {
      height: 8,
      borderRadius: 0,
    },
  })(Slider);

const FrontPage = () => {
    const activateKeyHandler = (keyToActivate) => {
        setActiveKey(keyToActivate);
    }

    const fullWelcomeText = "Welcome to SwiftWriter - an application made to help you type fast and properly!";
    const [welcomeText, setWelcomeText] = useState(" ");
    const [charIdx, setCharIdx] = useState(0);
    const [stops, setStops] = useState(findStopsInText(fullWelcomeText));
    const [wordsPerMinute, setWordsPerMinute] = useState(5);
    const [updateTime, setUpdateTime] = useState(wordsPerMinToUpdateTime(wordsPerMinute, fullWelcomeText));
    const [activeKey, setActiveKey] = useState();
    const [allKeysActive, setAllKeysActive] = useState(true);
    const [playAnimation, setPlayAnimation] = useState(true);
    const [animationFinished, setAnimationFinished] = useState(false);

    const allKeysActiveHandler = () => {
        setAllKeysActive(!allKeysActive);
    };

    const animationPlayingHandler = () => {
        setPlayAnimation(!playAnimation);
    };

    const getWordsPerMinute = (newWordsPerMinute) => {
        setWordsPerMinute(newWordsPerMinute);
        setUpdateTime(wordsPerMinToUpdateTime(newWordsPerMinute, fullWelcomeText));
    }

    useEffect(() => {
        setTimeout(() => {
            if (playAnimation) {
                if (stops.includes(charIdx)) {
                    let tempStops = [...stops];
                    tempStops.shift();
                    setStops(tempStops);
                } else if (charIdx < fullWelcomeText.length) {
                    let newChar = fullWelcomeText.charAt(charIdx);
                    activateKeyHandler(newChar);

                    if (charIdx === 0) {
                        setWelcomeText(newChar);
                    } else {
                        setWelcomeText(welcomeText.concat(newChar));
                    }
                    
                    setCharIdx(charIdx + 1);
                } else {
                    setAnimationFinished(true);
                    setTimeout(() => {
                        setWelcomeText(" ");
                        setCharIdx(0);
                        setAnimationFinished(false);
                    }, 2000);
                }
            }
        }, updateTime);
    }, [charIdx, stops, playAnimation]);

    return (
        <div className={classes.FrontPage}>
            {/* <div>Solna weather: {weatherInSolna}</div> */}

            <WelcomeAnimation 
                welcomeText = {welcomeText}
                animationFinished = {animationFinished}
                playAnimation = {playAnimation}
            />

            <PrettoSlider
                defaultValue={wordsPerMinute}
                getAriaValueText={getWordsPerMinute}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={5}
                marks
                min={5}
                max={100}
                style= {{
                    "width": "500px",
                    "margin": "20px auto 10px auto"
                }}
            />

            <p>Words per minute: <strong style={{"color":"#FE6E6E"}}>{wordsPerMinute}</strong></p>

            <KeyboardContainer 
                keyboardType = "swe-win"
                activeKey = {activeKey}
                updateTime = {updateTime}
                allKeysActive = {allKeysActive}
            />
            
            <div className={classes.settings}>
                <div className={classes.setting}>
                    <mark className={classes.mappingText}>Animation</mark>
                    <ToggleButtonGroup
                        value={playAnimation}
                        exclusive
                        onChange={animationPlayingHandler}
                        style = {{
                            "margin": "0 auto"
                        }}
                    >
                        <ToggleButton value={true}>
                            <PlayIcon />
                        </ToggleButton>

                        <ToggleButton value={false}>
                            <PauseIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                
                
                <div className={classes.setting}>
                    <mark className={classes.mappingText}>Key-finger mapping</mark>
                    <ToggleButtonGroup
                        value={allKeysActive}
                        exclusive
                        onChange={allKeysActiveHandler}
                        style = {{
                            "margin": "0 auto"
                        }}
                    >
                        <ToggleButton value={true}>
                            <div>Show</div>
                        </ToggleButton>
                        <ToggleButton value={false}>
                            <div>Hide</div>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                
            </div>
            


        </div>
    )
}

export default FrontPage;
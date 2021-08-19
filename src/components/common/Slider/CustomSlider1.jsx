import React from 'react';
import classes from './customSlider1.module.scss';

import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider';
import { discreteMSlider } from '../../../utility/sliderStyles';

const PrettoSlider = withStyles(discreteMSlider)(Slider);

const CustomSlider1 = ({
    sliderValue, 
    valueChangeHandler, 
    minVal, 
    maxVal, 
    stepSize,
    sliderWidth = "100%",
    sliderMargin = "0"
}) => {

    return (
        <PrettoSlider
            defaultValue={sliderValue}
            getAriaValueText={valueChangeHandler}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={stepSize}
            marks
            min={minVal}
            max={maxVal}
            style= {{
                "width": sliderWidth,
                "margin": sliderMargin
            }}
        />
    )
}

export default CustomSlider1;
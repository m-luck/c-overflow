import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const SimpleSlider = props => {
    const {
        marks = [],
        max = 10,
        min = 0,
    } = props

    const valuetext = value => `${value}`

    return (
        <Slider
            aria-labelledby="discrete-slider"
            defaultValue={max/2}
            getAriaValueText={valuetext}
            marks={marks}
            max={max}
            min={min}
            step={1}
            valueLabelDisplay="auto"
        />
    )
}

export default SimpleSlider

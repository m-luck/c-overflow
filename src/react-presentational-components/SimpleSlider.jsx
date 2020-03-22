import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const SimpleSlider = props => {
    const {
        marks = [],
        max,
        min,
    } = props

    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });

    const valuetext = value => `${value}°C`

    return (
        <Slider
            aria-labelledby="discrete-slider"
            defaultValue={50}
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

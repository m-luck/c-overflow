import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const SimpleSlider = props => {
    const {
        domID,
        markers,
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
        <Slider id={domID}
            defaultValue={50}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={min}
            max={max}
        />
    )
}

export default SimpleSlider

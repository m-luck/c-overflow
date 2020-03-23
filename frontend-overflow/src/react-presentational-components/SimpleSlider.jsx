import React from 'react'
import Slider from '@material-ui/core/Slider';
import {
    DEFAULT_MAX,
    DEFAULT_MID,
    DEFAULT_MIN,
} from '../constants.js'

const SimpleSlider = props => {
    const {
        className,
        marks = [],
        max = DEFAULT_MAX,
        min = DEFAULT_MIN,
        onChange,
        value,
    } = props

    const valuetext = value => `${value}`

    return (
        <Slider className={className}
            marks={marks}
            max={max}
            min={min}
            step={1}
            onChange={onChange}
            value={value}
            // valueLabelDisplay="auto"
        />
    )
}

export default SimpleSlider

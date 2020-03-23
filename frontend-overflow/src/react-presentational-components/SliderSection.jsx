import React from 'react'
import { StyledSimpleSlider } from './styled-presentational-components.jsx'
import {
    DEFAULT_MAX,
    DEFAULT_MID,
    DEFAULT_MIN,
} from '../constants.js'

const SliderSection = props => {

    const {
        className,
        input, // If passed in from Redux Form Field
        marks = [],
        max = DEFAULT_MAX,
        min = DEFAULT_MIN,
        sectionTitle,
    } = props

    return (
        <div className={className}>
            <h3>{sectionTitle}</h3>
            <StyledSimpleSlider
                value={input.value}
                onChange={(event, value) => input.onChange(value)}
                max={max}
                marks={marks}
                min={min}
            />
        </div>
    )
}

export default SliderSection

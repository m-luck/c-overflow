import React from 'react'
import { StyledSimpleSlider } from './styled-presentational-components.jsx'
import {
    DEFAULT_MAX,
    DEFAULT_MID,
    DEFAULT_MIN,
} from '../constants.js'

const SliderSection = props => {

    const {
        marks = [],
        max = DEFAULT_MAX,
        min = DEFAULT_MIN,
        sectionTitle,
    } = props

    return (
        <div>
            <h3>{sectionTitle}</h3>
            <StyledSimpleSlider
                max={max}
                marks={marks}
                min={min}
            />
        </div>
    )
}

export default SliderSection

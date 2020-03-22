import React from 'react'
import { StyledSimpleSlider } from './styled-presentational-components.jsx'

const SliderSection = props => {

    const {
        max = 10,
        marks = [],
        min = 0,
        sectionTitle = 'Untitled',
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

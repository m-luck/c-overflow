import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { StyledSliderSection } from '../../react-presentational-components/styled-presentational-components.jsx'
import {
    sliderConfigs,
    SLIDERS_FORM_KEY,
} from '../../constants.js'
import selectors from '../../selectors/selectors.js'
import { connect } from 'react-redux'

const UnconnectedSliderSectionList = props => {
    const {
        handleSubmit
    } = props

    return (
        <div>
            {
                sliderConfigs.map(config => {
                    return (
                        <Field
                            component={StyledSliderSection}
                            key={config.item}
                            marks={config.marks.map(selectors.convertTupleToMarkObject)}
                            max={config.max}
                            min={config.min}
                            sectionTitle={config.sectionTitle || config.item}
                        />
                    )
                })
            }
        </div>
    )
}

const SliderSectionListForm = reduxForm({
    form: SLIDERS_FORM_KEY
  })(UnconnectedSliderSectionList)

export default connect(null, null)(SliderSectionListForm)

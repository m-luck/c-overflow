import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    StyledInput,
    StyledSliderSection,
    StyledButton,
    StyledTextArea,
} from '../../react-presentational-components/styled-presentational-components.jsx'
import {
    sliderConfigs,
    SLIDERS_FORM_KEY,
    sliderSectionListFormInitialValues,
} from '../../constants.js'
import selectors from '../../selectors/selectors.js'
import { connect } from 'react-redux'
import { onSubmitSliderSectionListForm } from '../../redux/action-creators.js'

const UnconnectedSliderSectionList = props => {
    const {
        className,
        handleSubmit,
    } = props

    selectors.setIP(props.change)

    return (
        <div className={className}>
            <h2>This is How I Am Feeling...</h2>
            <div>
                {
                    sliderConfigs.map(config => {
                        const uniqueID = selectors.getReduxFormFieldName(config)
                        return (
                            <Field
                                component={StyledSliderSection}
                                name={uniqueID}
                                key={uniqueID}
                                marks={config.marks.map(selectors.convertTupleToMarkObject)}
                                max={config.max}
                                min={config.min}
                                sectionTitle={config.sectionTitle || config.item}
                            />
                        )
                    })
                }
            </div>
            <div style={{textAlign: "center"}}>
                <Field
                    component={StyledInput}
                    name="email"
                    key="email"
                    onChange={null}
                    placeholder="Click to type your email..."
                />
                <Field
                    component={StyledTextArea}
                    name="comment"
                    key="comment"
                    onChange={null}
                    placeholder="Click to type any other candid comments, thoughts, complaints, suggestions, wishes..."
                />
                <StyledButton onClick={() =>
                    {
                        handleSubmit()
                        props.change('email', 'Submitted!')
                        props.change('comment', 'I hear you. Thank you for helping paint a better picture.')
                    }
                }>Submit ▶</StyledButton>
            </div>
        </div>
    )
}

const SliderSectionListForm = reduxForm({
    form: SLIDERS_FORM_KEY,
    onSubmit: onSubmitSliderSectionListForm,
    initialValues: sliderSectionListFormInitialValues(),
  })(UnconnectedSliderSectionList)

export default connect(null)(SliderSectionListForm)

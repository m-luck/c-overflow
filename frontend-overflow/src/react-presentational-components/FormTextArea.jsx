import React from 'react'

const FormTextArea = props => {
    const {
        className,
        input, // If passed in from Redux Form Field
        placeholder,
    } = props

    return (
        <div className={className}>
            <textarea
                placeholder={placeholder}
                className={className}
                value={input.value}
                onChange={input.onChange}
            />
        </div>
    )
}

export default FormTextArea

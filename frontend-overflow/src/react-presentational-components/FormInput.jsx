import React from 'react'

const FormInput = props => {
    const {
        className,
        input, // If passed in from Redux Form Field
        placeholder,
    } = props

    return (
        <div className={className}>
            <input
                placeholder={placeholder}
                value={input.value}
                onChange={input.onChange}
            />
        </div>
    )
}

export default FormInput

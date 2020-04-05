import React from 'react'
import { toggleNightModeAction } from '../redux/action-creators.js'

const NightModeButton = props => {
    const {
        // onState
    } = props

    return (
        <StyledButton onClick={toggleNightModeAction} >
            🌙
        </StyledButton>
    )
}

export default NightModeButton

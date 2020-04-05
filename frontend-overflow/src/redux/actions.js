// Actions are just plain objects with a `type` field. These types (which are string constants for good practice) can be found in `action-types.js`.
import {
    DISABLE_NIGHT_MODE,
    ENABLE_NIGHT_MODE,
    TOGGLE_NIGHT_MODE,
    POST_SUBMISSION,
} from './action-types'

export const disableNightModeAction = { type: DISABLE_NIGHT_MODE }
export const enableNightModeAction = { type: ENABLE_NIGHT_MODE }
export const toggleNightModeAction = { type: TOGGLE_NIGHT_MODE }

export const postSubmissionAction = { type: POST_SUBMISSION }

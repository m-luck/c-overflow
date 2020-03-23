// Actions are just plain objects with a `type` field. These types (which are string constants for good practice) can be found in `action-types.js`.
import {
    DISABLE_NIGHT_MODE,
    ENABLE_NIGHT_MODE,
    TOGGLE_NIGHT_MODE,
    POST_SUBMISSION,
} from './action-types'

export const disableNightMode = { type: DISABLE_NIGHT_MODE }
export const enableNightMode = { type: ENABLE_NIGHT_MODE }
export const toggleNightMode = { type: TOGGLE_NIGHT_MODE }

export const postSubmission = { type: POST_SUBMISSION }

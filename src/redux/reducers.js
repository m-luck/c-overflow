import { combineReducers } from 'redux'
import {
    DISABLE_NIGHT_MODE,
    ENABLE_NIGHT_MODE,
    TOGGLE_NIGHT_MODE,
} from './action-types'

const nightModeReducer = (state = {}, action) => {
    switch(action.type) {
        // Night Mode
        case TOGGLE_NIGHT_MODE: {
            return { state: !state }
        }
        case ENABLE_NIGHT_MODE: {
            return { state: true }
        }
        case DISABLE_NIGHT_MODE: {
            return { state: false }
        }
    }
}

const appReducer = combineReducers({
    nightMode: nightModeReducer,
})

export default appReducer

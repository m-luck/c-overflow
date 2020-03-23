// Action creators dispatch actions (`dispatch()` being a Redux function). Action creators are also tasked to handle any side effects of the action (besides the state).
import axios from 'axios'
import {
    disableNightMode,
    enableNightMode,
    toggleNightMode,
    postSubmission,
} from './actions.js'
import {
    API_SUBMISSION_URL,
    API_SUBMISSION_BACKUP_URL,
} from '../constants.js'
import selectors from '../selectors/selectors.js'

export const onSubmitSliderSectionListForm = (values, dispatch, props) => {

    if (!('comment' in values)) { values['comment'] = '(no comment)'}

    if (!('ip_address' in values)) {
        values['ip_address'] =  '(no ip)'
    }

    if (!('email' in values)) { values['email'] = '(no email)'}

    axios
    .post(API_SUBMISSION_URL, {
        ...values
    })
    .then(res =>
        null
    )

    axios
    .post(API_SUBMISSION_BACKUP_URL, {
        ...values
    })
    .then(res =>
        null
    )

    dispatch(postSubmission)
}

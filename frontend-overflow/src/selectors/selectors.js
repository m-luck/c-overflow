import { createStructuredSelector } from 'reselect'
import axios from 'axios'
import {
    API_SUBMISSION_URL
} from '../constants.js'

const requestSubmissions = (component) => {
    axios.get(API_SUBMISSION_URL)
    .then(res => {
            component.setState(
                { submissions: res.data },
                () => { // Callback once response is resolved
                    // Empty for now.
                }
            )
        }
    )
}

const selectors = {
    requestSubmissions
}

export default selectors

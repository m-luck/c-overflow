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

const convertTupleToMarkObject = (tuple) => {
    return (
        {
            value: tuple[0],
            label: tuple[1]
        }
    )
}

const selectors = {
    requestSubmissions,
    convertTupleToMarkObject
}

export default selectors

import { createStructuredSelector } from 'reselect'
import axios from 'axios'
import {
    API_SUBMISSION_URL
} from '../constants.js'

// const requestSubmissions = (component) => {
//     axios.get(API_SUBMISSION_URL)
//     .then(res => {
//             component.setState(
//                 { submissions: res.data },
//                 () => { // Callback once response is resolved
//                     // Empty for now.
//                 }
//             )
//         }
//     )
// }

const convertTupleToMarkObject = (tuple) => {
    return (
        {
            value: tuple[0],
            label: tuple[1]
        }
    )
}

const getReduxFormFieldName = (config) => (config.item || config.slug).toLowerCase()

const setIP = (changeForm) => {
    axios.get('https://www.cloudflare.com/cdn-cgi/trace')
    .then(res => parseIP(res, changeForm))
}

// Callback for getIP
const parseIP = (res, changeForm) => {
    const lines = res.data.split("\n")
    lines.forEach(line =>
        {
            if (line.startsWith("ip")) {
                const ip = line.split("=")[1]
                changeForm("ip_address", ip)
            }
        }
    )
}

const selectors = {
    // requestSubmissions,
    convertTupleToMarkObject,
    getReduxFormFieldName,
    setIP,
}

export default selectors

import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {
    StyledSliderSection
} from '../react-presentational-components/styled-presentational-components.jsx'
import {
    SUBMISSION_API_URL
} from '../constants.js'

class App extends React.Component {

    state = {
        submissions: [],
        loaded: false,
        placeholder: "Loading"
    }

    componentDidMount() {
        this.resetState()
    }

    getSubmissions = () => {
        axios.get(API_SUBMISSION_URL).then(res => this.setState({ submissions: res.data }));
    }

    resetState = () => {
        this.getSubmissions();
    }

    render() {
        return (
            <div>
                {
                    this.state.submissions.forEach( submission =>
                        <StyledSliderSection
                            sectionTitle={submission.email}
                            max={submission.max}
                            marks={submission.marks}
                            min={submission.min}
                        />
                    )
                }
            </div>
        )
    }
}

const StyledApp = styled(App)`
`

export default StyledApp

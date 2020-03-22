import React from 'react'
import styled from 'styled-components'
import {
    StyledSliderSection
} from '../react-presentational-components/styled-presentational-components.jsx'
import selectors from '../selectors/selectors.js'

class App extends React.Component {

    state = {
        submissions: [],
        loaded: false,
        placeholder: "Loading"
    }

    componentDidMount() {
        this.populateState()
    }

    populateState = () => {
        this.getSubmissions()
    }

    getSubmissions = () => {
        selectors.requestSubmissions(this)
    }

    render() {
        return (
            <div>
                {
                    this.state.submissions.map( submission =>
                        {
                            return (
                                <StyledSliderSection
                                    key="example-key"
                                    sectionTitle='Untitled'
                                    max={submission.max}
                                    marks={submission.marks}
                                    min={submission.min}
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
}

const StyledApp = styled(App)`
`

export default StyledApp

import React from 'react'
import styled from 'styled-components'
import {
    StyledSliderSectionListForm
} from './styled-stateful-components.jsx'
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
                    <StyledSliderSectionListForm/>
                </div>
        )
    }
}

const StyledApp = styled(App)`
`

export default StyledApp

import React from 'react'
import styled from 'styled-components'
import {
    StyledSliderSectionListForm
} from './styled-stateful-components.jsx'
import selectors from '../selectors/selectors.js'
import { colors, sliderSectionListFormInitialValues } from '../constants.js'

class App extends React.Component {

    componentDidMount() {
        this.populateState()
    }

    populateState = () => {
    }

    getSubmissions = () => {
    }

    setZoom = (ratio) => {
        document.body.style.zoom = ratio
    }

    render() {
        return (
                <div className={this.props.className}>
                    <StyledSliderSectionListForm/>
                </div>
        )
    }
}

const StyledApp = styled(App)`
    font-family: sans-serif;
    background-image: linear-gradient(to bottom, ${colors.blue} 0%, ${colors.pink} 60%, ${colors.orange} 100%);
    margin: 0;
    padding: 0;
`

export default StyledApp

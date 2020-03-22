import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
// Components
import {
    StyledSimpleSlider,
} from './react-presentational-components/styled-presentational-components.jsx'
// Redux
import appReducer from './redux/reducers.js'

const App = () => (
    <div>
        <StyledSimpleSlider
            domID="slider1"
            max={100}
            min={0}
        />
    </div>
)

const StyledApp = styled(App)`
`

ReactDOM.render(
    <StyledApp />,
    document.getElementById('root')
)

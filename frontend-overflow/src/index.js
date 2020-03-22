import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
// Components
import StyledApp from './react-stateful-components/App.jsx'
// Redux
import appReducer from './redux/reducers.js'


ReactDOM.render(
    <StyledApp />,
    document.getElementById('root')
)

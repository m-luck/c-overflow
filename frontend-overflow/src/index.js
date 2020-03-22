import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
// Components
import StyledApp from './react-stateful-components/App.jsx'
// Redux
import { Provider } from 'react-redux'
import appReducer from './redux/reducers.js'
import { createStore } from 'redux'

export let store = createStore(appReducer)

ReactDOM.render(
    <Provider store={store}>
        <StyledApp />
    </Provider>,
    document.getElementById('root')
)

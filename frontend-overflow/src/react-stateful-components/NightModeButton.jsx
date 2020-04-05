import React from 'react'
import { toggleNightMode } from '../redux/action-creators.js'
import { StyledButton } from '../react-presentational-components/styled-presentational-components.jsx'
import styled from 'styled-components'
import { colors as dayColors, darkColors } from '../constants.js'
let colors = darkColors
export default styled.button`
    height: 7vw;
    background-image: linear-gradient(45deg, ${colors.orange} 0%, ${colors.pink} 30%, ${colors.blue} 100%);
    background-size: 35vw;
    border: none;
    border-radius: 3px;
    transition: background 0.5s ease-out;
    padding: 2vw;
    margin: 4vw;
    right: 5vw;
    font-size: 10px;
    color: ${colors.nightBlue};
    cursor: pointer;
    z-index: 100;
    position: fixed;
    :hover {
        background-position: -10vw;
    }
    :focus {
        outline: none;
    }
`

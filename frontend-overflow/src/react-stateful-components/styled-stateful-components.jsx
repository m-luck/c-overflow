import styled from 'styled-components'
import SliderSectionListForm from './redux-forms/SliderSectionListForm.jsx'
import { colors } from '../constants.js'

export const StyledSliderSectionListForm = styled(SliderSectionListForm)`
    h2 { color: ${colors.green} }
    padding: 7vh;
    margin: auto;
    position: relative;
    width: 75vw;
    background-color: ${colors.softWhite};
    opacity: 0.8;
    border-radius: 10px;
`

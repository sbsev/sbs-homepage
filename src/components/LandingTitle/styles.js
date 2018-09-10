import styled from 'styled-components'
import Img from 'gatsby-image'

export { default as Button } from '../Button'

export const Container = styled.div`
  grid-column: 1 / -1 !important;
  margin-top: -5vh;
  position: relative;
  text-align: center;
`

export const Title = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  background: rgba(255, 255, 255, 0.5);
  color: ${props => props.theme.darkBlue};
  padding: 1em 1em 1.5em;
  border-radius: ${props => props.theme.mediumBorderRadius};
  h1 {
    margin-top: 0;
    font-size: 1.5em;
  }
  h2 {
    font-size: 1em;
    margin: 1.5em 0;
  }
`

export const Hero = styled(Img)`
  max-height: 80vh;
  transition: ${props => props.theme.mediumTrans};
`

export const Caption = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 5em;
  color: ${props => props.theme.mainWhite};
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${props => props.theme.mediumBorderRadius};
  padding: 0 0.5em;
`

export const Dots = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 1em;
  display: grid;
  grid-gap: 1em;
  grid-auto-flow: column;
  color: ${props => props.theme.mainWhite};
`

export const Dot = styled.div`
  border-radius: 50%;
  height: 1em;
  width: 1em;
  background: rgba(0, 0, 0, 0.5);
  background: ${props => props.active && props.theme.lightGreen};
  transition: ${props => props.theme.mediumTrans};
  border: ${({ theme }) => theme.smallBorder + ` solid ` + theme.mainWhite};
  :hover {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
    transform: scale(1.2);
    border: ${({ theme }) => theme.smallBorder + ` solid ` + theme.lightBlue};
  }
`
import styled, { css } from 'styled-components'

export const Caption = styled.figcaption`
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 1em;
  font-size: 0.8em;
  transition: ${props => props.theme.shortTrans};
  color: white;
  padding: 0.1em 0.5em;
  background: rgba(0, 0, 0, 0.7);
  border-radius: ${props => (props.theme.mediumBorderRadius + ` `).repeat(2)} 0 0;
  a {
    color: ${props => props.theme.lightBlue};
    transition: ${props => props.theme.shortTrans};
    :hover {
      color: ${props => props.theme.orange};
    }
  }
  > p:first-child {
    margin: 0;
  }
  ${props =>
    props.showOnHoverParent &&
    css`
      visibility: hidden;
      opacity: 0;
      ${props.showOnHoverParent}:hover & {
        visibility: visible;
        opacity: 1;
      }
    `}
`

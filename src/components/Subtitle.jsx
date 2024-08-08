import styled from '@emotion/styled'
import { elements } from '../styles/theme'

export default function Subtitle({ children, color }) {
  return (
    <SubtitleContainer color={color}>
      {children}
    </SubtitleContainer>
  )
}

const SubtitleContainer = styled.h3`
  position: relative;
  height: 46px;
  margin: 0 0 0 32px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.color || elements.subtitleFont};
  display: flex;
  align-items: center;
  &::before {
    position: absolute;
    left: -32px;
    bottom: 0;
    content: "";
    height: 46px;
    width: 12px;
    background-color: ${elements.subtitleUnderline};
  }
  @media only screen and (max-width: 800px) {
    padding: 0 8vw 4px;
    font-size: 1.6em;
    &::before {
      margin: 0 8vw;
    }
  }
`
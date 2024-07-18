import React from 'react'
import styled from '@emotion/styled'
import { elements } from '../theme'
import { colors } from '../theme'

export default function Title({ children, color }) {
  return (
    <TitleContainer color={color}>
      {children}
    </TitleContainer>
  )
}

const TitleContainer = styled.h2`
  color: ${props => props.color || elements.TitleFont};
  font-family: "StretchPro", "Nunito", sans-serif;
  font-size: 32px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  span {
    font-family: "StretchPro", "Nunito", sans-serif;
    background-color: ${colors.secondary};
    padding: 4px 12px;
    color: white;
  }
  @media only screen and (max-width: 800px) {
    font-size: 26px;
    line-height: 42px;
  }
`
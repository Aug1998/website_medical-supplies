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
  color: ${props => props.color || elements.title};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`
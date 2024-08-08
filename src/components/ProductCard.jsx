import styled from '@emotion/styled'
import React from 'react'
import { colors, spaces } from '../style/theme'
import Icon from './Icon'

export default function ProductCard(props) {
  return (
    <Container>
      <CardImageContainer>
        <img src={props.img} alt=''/>
      </CardImageContainer>
      <CardBody>
        <p>{props.name}</p>
        <a href={props.link}>
          <>Ver más</>
          <Icon icon="arrowRight"/>
        </a>
      </CardBody>      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 288px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;    transform: translateY(-4px);
  }
`

const CardImageContainer = styled.div`
  width: 100%;
  height: calc((100vw - ${spaces.horizontalPadding} - ${spaces.horizontalPadding} - 72px) / 4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: white;
  img {
    width: 100%;
  }
  `

const CardBody = styled.div`
  width: 100%;
  height: calc(((100vw - ${spaces.horizontalPadding} - ${spaces.horizontalPadding} - 72px) / 4) * 0.46875);
  background-color: ${colors.primaryLight};
  padding: 14px 18px 16px;
  border-bottom: 3px solid ${colors.accent};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-family: 'Poppins';
    color: white;
    font-weight: 400;
    font-size: 16px
  }
  a {
    text-transform: uppercase;
    font-family: 'Open Sans';
    color: ${colors.accent};
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    svg {
      fill: ${colors.accent};
    }
  }
`
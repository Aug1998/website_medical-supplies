import React from 'react'
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'


export default function Hero() {
  return (
    <>
      <Container>
        <MainTitle>
           Gestiona <br/>facilmente <br/>tus eventos <br/>y llevalos al <br/><span>proximo <br/>nivel.</span></MainTitle>
        <HeroText>
          WQRLD Pass te brinda las herramientas para que potencies tus <br/>
          eventos y conozcas a tu audiencia.
        </HeroText>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: ${elements.heroBackround};
  gap: 70px;
  padding: 70px ${spaces.horizontalPadding};
  @media only screen and (max-width: 800px) {
    padding: 80px 10px;
    svg {
      max-height: 300px;
      transform: translateX(20px);
    }
  }
`

const MainTitle = styled.h1`
  font-family: "StretchPro", "Nunito", sans-serif;
  color: ${elements.HeroTitle};
  text-transform: uppercase;
  text-align: center;
  max-width: 24ch;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1.2px;
  br {
    display: none;
  }
  span {
    font-family: "StretchPro", "Nunito", sans-serif;
    background-color: ${colors.secondary};
    padding: 0px 10px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 38px;
    br {
      display: block;
    }
  }
`

const HeroText = styled.p`
  color: ${elements.HeroText};
  opacity: 70%;
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

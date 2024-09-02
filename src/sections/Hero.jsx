import styled from '@emotion/styled'
import React from 'react'
import Button from '../components/Button'
import { colors, elements, spaces } from '../style/theme'
import { scrollToElementById } from '../utils/utils'

export default function Hero() {
  return (
    <>
      <Container>
        <Overlay />
        <HeroContent>
          <img src="./img/permedica.png" alt="" />
          <MainTitle>
            _Conocé la calidad y excelencia de nuestros insumos médicos. 
          </MainTitle>
          <Button onClick={(e) => {e.preventDefault(); scrollToElementById("caracteristicas")}}>Conocenos</Button>
        </HeroContent>
      </Container>
    </>
  )
}


const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(76, 88, 97, 0.45);
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 122px;
    filter: grayscale(1) brightness(100);
  }
  @media only screen and (max-width: 800px) {
    padding: 0 ${spaces.horizontalPaddingMobile};
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color:  rgba(76, 88, 97, 0.7);
  background-image: url(./img/hero-bg.jpeg);
  background-size: cover;
  background-position-y: 69%;
  background-blend-mode: luminosity;
  gap: 70px;
  padding: 70px ${spaces.horizontalPadding} 0;
  @media only screen and (max-width: 800px) {
    padding: 80px 10px;
    svg {
      max-height: 300px;
      transform: translateX(20px);
    }
  }
`

const MainTitle = styled.h2`
  font-family: "Poppins", "Nunito", sans-serif;
  color: ${elements.HeroTitle};
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1.2px;
  margin: 38px 0 80px;
  span {
    font-family: "StretchPro", "Nunito", sans-serif;
    background-color: ${colors.secondary};
    padding: 0px 10px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 33px;
    line-height: 44px;
    max-width: 17ch;
  }
`

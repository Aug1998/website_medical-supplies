import styled from '@emotion/styled'
import React from 'react'
import { elements, spaces } from '../style/theme'

export default function HeroSmall({ title }) {
  return (
    <>
      <Container>
        <Overlay />
          <Title>
            _{title}
          </Title>
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

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40vh;
  background-color:  rgba(76, 88, 97, 0.7);
  background-image: url(../img/hero-bg.jpeg);
  background-size: cover;
  background-position-y: 69%;
  background-blend-mode: luminosity;
  gap: 70px;
  padding: 120px ${spaces.horizontalPadding} 0;
  @media only screen and (max-width: 800px) {
    padding: 80px ${spaces.horizontalPaddingMobile};
    background-size: 160%;
    background-position-y: 69%;
    background-blend-mode: luminosity;
    svg {
      max-height: 300px;
      transform: translateX(20px);
    }
  }
`

const Title = styled.h2`
  font-family: "Poppins", "Nunito", sans-serif;
  color: ${elements.HeroTitle};
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1.2px;
  margin: 38px 0 80px;
  @media only screen and (max-width: 800px) {
    font-size: 33px;
    line-height: 44px;
    max-width: unset;
    margin: 60px 0 0;
  }
`

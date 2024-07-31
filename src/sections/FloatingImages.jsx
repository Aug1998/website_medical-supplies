import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors, spaces } from '../theme'


export default function FloatingImages() {
  const containerRef = useRef(null)
  const [floatingImages, setFloatingImages] = useState([])

  useEffect(() => {
    const images = document.querySelectorAll('img')
    setFloatingImages(images)
  }, [containerRef])

  const handleMouseMove = (e) => {
    floatingImages.forEach(image => {
      const x = (window.innerWidth - e.pageX*image.dataset.speed) / 95
      const y = (window.innerHeight - e.pageY*image.dataset.speed) / 95
      image.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  return (
    <>
      <Container
        id="precios" 
        ref={containerRef} 
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <img src="./img/floating-images-section/imagen1.jpg" data-speed="-2" alt="" />
        <img src="./img/floating-images-section/imagen2.jpg" data-speed="4" alt="" />
        <img src="./img/floating-images-section/imagen3.jpg" data-speed="5" alt="" />
        <img src="./img/floating-images-section/imagen4.jpg" data-speed="-2" alt="" />
        <Content>
          <Title>Tu evento, <br/><span>Tu presupuesto</span></Title>
          <HeroText>
            Tu evento es único, por lo que ajustamos nuestro <br/>presupuesto a tus necesidades.
          </HeroText>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${colors.white};
  background-size: cover;
  background-position-y: -90px;
  padding: 0 ${spaces.horizontalPadding};
  margin-top: 70px;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    margin-top: 0px;
    margin-bottom: 60px;
    padding: 10px;
  }
  img {
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  img:nth-of-type(1){
    top: -6%;
    left: 6%;
    max-width: 28vw;
    @media only screen and (max-width: 800px) {
      top: 2%;
      left: -24%;
      max-width: 78vw;
    }
  }
  img:nth-of-type(3) {
    top: 56%;
    left: -6%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      top: unset!important;
      bottom: -17%;
      left: -16%;
      max-width: 61vw;
      z-index: 11;
    }
  }
  img:nth-of-type(2) {
    top: 4%;
    right: 8%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      top: 25vh;
      max-width: 75vw;
      right: -38%;
    }
  }
  img:nth-of-type(4) {
    bottom: 20%;
    right: -3%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      bottom: 18%;
      right: -15%;
      max-width: 69vw;
    }
  }
`

const Content = styled.div`
  display: flex;
  user-select: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transform: translateY(30px);
  @media only screen and (max-width: 800px) {
    gap: 34px;
  }
`

const Title = styled.h2`
  font-family: "StretchPro", "Nunito", sans-serif;
  color: ${colors.primary};
  text-transform: uppercase;
  text-align: center;
  max-width: 24ch;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1.2px;
  span {
    font-family: "StretchPro", "Nunito", sans-serif;
    color: ${colors.secondary};
  }
  @media only screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 34px;
  }
`

const HeroText = styled.p`
  color: ${colors.primary};
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  @media only screen and (max-width: 800px) {
    line-height: 24px;
   br {
    display: none;
   }
  }
`

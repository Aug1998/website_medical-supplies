import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors, spaces } from '../theme'

export default function LogisticaMobile() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [floatingImages, setFloatingImages] = useState([])

  useEffect(() => {
    const images = document.querySelectorAll('img')
    setFloatingImages(images)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    floatingImages.forEach(image => {
      const speed = parseFloat(image.dataset.speed) || 0
      const translateY = `${((scrollY-3500)/40)*speed}px`
      image.style.transform = `translateY(${translateY})`
    })
  }, [scrollY, floatingImages])

  return (
    <>
      <Container
        id="precios"
        ref={containerRef}
      >
        <img src="./img/floating-images-section/imagen1.jpg" data-speed="-1.8" alt="" />
        <img src="./img/floating-images-section/imagen2.jpg" data-speed="1.4" alt="" />
        <img src="./img/floating-images-section/imagen3.jpg" data-speed="1" alt="" />
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
      top: 13vh;
      left: -26%;
      max-width: 78vw;
    }
  }
  img:nth-of-type(2) {
    top: 4%;
    right: 8%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      top: 6vh;
      right: -36vw;
      max-width: 75vw;
    }
  }
  img:nth-of-type(3) {
    top: 56%;
    left: -6%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      top: unset!important;
      bottom: 4vh;
      left: -22%;
      max-width: 64vw;
      z-index: 11;
    }
  }
  img:nth-of-type(4) {
    bottom: 20%;
    right: -3%;
    max-width: 33vw;
    @media only screen and (max-width: 800px) {
      bottom: 7vh;
      right: -20vw;
      max-width: 70vw;
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

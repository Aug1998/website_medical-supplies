import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { colors, spaces } from '../style/theme'

export default function ParallaxSection() {
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
        id="logistica"
        ref={containerRef}
      >
        <img src="../img/logistica.jpeg" data-speed="-6" alt="" />
        <Content>
          <Title>_logística en salud</Title>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${colors.white};
  background-position-y: -90px;
  padding: 0 ${spaces.horizontalPadding};
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    min-height: 90vh;
    margin-top: 0px;
    padding: 10px;
  }
  img {
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  img:nth-of-type(1){
    top: -480px;
    right: -100px;
    width: 120%;
    @media only screen and (max-width: 800px) {
      top: 0px;
      right: -550px;
      width: 360%;
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
  @media only screen and (max-width: 800px) {
    gap: 34px;
  }
`

const Title = styled.h2`
  color: white;
  text-align: center;
  max-width: 24ch;
  font-weight: 600;
  font-size: 64px;
  line-height: 48px;
  letter-spacing: 1.2px;
  @media only screen and (max-width: 800px) {
    font-size: 50px;
    line-height: 60px;
    max-width: 16ch;
  }
`

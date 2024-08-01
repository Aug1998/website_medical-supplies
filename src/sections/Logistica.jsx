import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors, spaces } from '../theme'


export default function Logistica() {
  const containerRef = useRef(null)
  const [floatingImages, setFloatingImages] = useState([])

  useEffect(() => {
    const images = document.querySelectorAll('img')
    // setFloatingImages(images)
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
        id="logistica" 
        ref={containerRef} 
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <img src="./img/logistica.jpeg" data-speed="-2" alt="" />
        <Title>_logística en salud</Title>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 ${spaces.horizontalPadding};
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    margin-top: 0px;
    margin-bottom: 60px;
    padding: 10px;
  }
  img {
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    top: 0%;
    left: 0%;
    width: 100vw;
    transform: translateY(-28%);
    @media only screen and (max-width: 800px) {
      top: 2%;
      left: -24%;
      max-width: 78vw;
    }
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
    font-size: 28px;
    line-height: 34px;
  }
`

import React from 'react'
import styled from '@emotion/styled'
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Button from "../components/Button";
import { elements, spaces } from '../theme'

export default function AboutUs() {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src="./img/about.jpeg" alt="about us section" />
        </ImageContainer>
        <TextContainer>
          <Subtitle color={elements.AboutUsCTASubtitleFont}>Sobre Nosotros</Subtitle>
          <Title color={elements.AboutUsCTATitleFont}>Movimientos & Servicios</Title>
          <p>
            Movimientos y servicios nace como unipersonal <br/>
            hace 30 años, hoy somos una empresa familiar <br/>
            creciendo en el rubro de la construcción.<br/>
            <br/>
            En el transcurso de estos años realizamos obras de <br/>
            mediana magnitud tanto públicas como privadas <br/>
            contando con un amplio plantel de equipo moderno <br/>
            y personal especializado.
          </p>
          <Button>Contactanos</Button>
        </TextContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  gap: 180px;
  align-items: center;
  padding: 100px ${spaces.horizontalPadding};
  background-color: ${elements.AboutUsBackground};
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 31vw;
  overflow: hidden;
  img{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: -10px;
    z-index: 98;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 38px;
  color: ${elements.AboutUsText};
`

import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import Card from "../components/Card";
import Title from "../components/Title";
import { colors, elements, spaces } from '../theme'

export default function Services() {
  return (
    <>
      <Container id="caracteristicas">
        <Title color={elements.TitleFont}>En <span>wqrld</span> podés <br/>encontrar:</Title>
        <CardsContainer>
          <Card 
            title="Flexibilidad para vender entradas" 
            text={"Elegí si querés vender tus entradas mediante efectivo o Ecommerce."}
            iconColor={colors.secondary}
            animationType={"top"}
          />
          <Card 
            title="Soporte 24/7" 
            text={"Estamos disponibles para cuando nos necesites"}
            iconColor={colors.accent}
            animationType={"top"}
          />
          <Card 
            title="Seguimiento de ventas" 
            text={"Llevá un registro de tus ventas y las de tu equipo en tiempo real."}
            iconColor={colors.secondary}
            animationType={"top"}
          />
          <Card 
            title="Conoce a tu audiencia" 
            text={"Accedé a información demográfica de los asistentes de tu evento"}
            iconColor={colors.accent}
            animationType={"bottom"}
          />
          <Card 
            title="Sin descargas" 
            text={"Accedé desde cualquier dispositivo."}
            iconColor={colors.secondary}
            animationType={"bottom"}
          />
          <Card 
            title="Email marketing y publicidad en redes" 
            text={"Crecé con nosotros y expandí tu llegada."}
            iconColor={colors.accent}
            animationType={"bottom"}
          />
        </CardsContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px ${spaces.horizontalPadding} 100px;
  background-color: ${elements.ServicesBackground};
  @media only screen and (max-width: 800px) {
    padding: 100px 12px 100px;
  }
  `

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.8vw;
  margin-top: 80px;
  @media only screen and (max-width: 800px) {
    padding: 0 28px;
    grid-template-columns: 1fr;
    gap: 8vh;
  }
`
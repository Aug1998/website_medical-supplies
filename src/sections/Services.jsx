import styled from '@emotion/styled'
import React from 'react'
import { colors, elements, spaces } from '../style/theme'

export default function Services() {
  return (
    <Container id="caracteristicas">
      <Title>
        <h3>/ Qué hacemos</h3>
      </Title>
      <ServicesContainer>
        <ServicesItem>
          <label>01/</label>
          <h4>_gestión y logística</h4>
          <div>
            <p>
              Ser eficientes. Nuestras logística se encuentra en un <br/>
              proceso de mejora continua que nos permite llegar más <br/>
              lejos con menores costos.
            </p>
            <a href="">MEJOR LOGÍSTICA</a>
          </div>
        </ServicesItem>
        <ServicesItem>
          <label>02/</label>
          <h4>_atención al cliente</h4>
          <div>
            <p>
                No perdemos el foco. El contacto constante y directo con <br/>
                usuarios y clientes es nuestro norte. 
              </p>
            <a href="">CONTACTO</a>
          </div>
        </ServicesItem>
        <ServicesItem>
          <label>03/</label>
          <h4>_partners</h4>
          <div>
            <p>
              Luego de años en logística y salud hemos desarrollado <br/>
              una importante red de socios estratégicos globales que nos <br/>
              permiten cumplir los estándares más altos de calidad.
            </p>
            <a href="">RED DE SOCIOS</a>
          </div>
        </ServicesItem>
      </ServicesContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px ${spaces.horizontalPadding} 100px;
  background-color: ${elements.ServicesBackground};
  @media only screen and (max-width: 800px) {
    padding: 60px ${spaces.horizontalPaddingMobile};
    flex-direction: column;
  }
`

const Title = styled.div`
  width: 22%;
  height: 100%;
  h3 {
    color: white;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 44px;
  }
`

const ServicesContainer = styled.ul`
  width: 78%;
  height: 100%;
  border-top: 1px solid ${colors.accent}55;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 36px 0;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`

const ServicesItem = styled.li`
  width: 100%;
  height: auto;
  border-bottom: 0.4px solid ${colors.accent}55;
  list-style: none;
  padding: 0 16px 36px 6px;
  display: flex;
  gap: 100px;
  label {
    font-weight: 600;
    font-size: 15px;
    color: ${colors.accent};
    letter-spacing: 1.5px;
  }
  h4 {
    font-weight: 500;
    font-size: 28px;
    color: white;
    line-height: 33px;
    width: 160px;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 400;
      font-size: 16px;
      color: white;
      line-height: 28px;
      margin-bottom: 24px;
    }
    a {
      font-weight: 400;
      font-size: 13px;
      color: white;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      display: inline;
      transition: all 0.2s;
      &:hover {
        color: ${colors.accent};
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    br {
      display: none;
    }
  }
`
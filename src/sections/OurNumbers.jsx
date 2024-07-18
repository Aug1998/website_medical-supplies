import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'
import TextTransition, { presets } from 'react-text-transition';
import AnimatedNumbers from "react-animated-numbers";
import { useIntobs } from '../useIntobs'

export default function OurNumbers() {
  const TEXTS = ['clubes nocturnos', 'fiestas', 'graduaciones', 'exposiciones', 'jornadas deportivas'];
  const [index, setIndex] = useState(0);
  const [numbers, setNumbers] = useState([0, 0, 0, 0])

  const { isIntersecting, ref } = useIntobs({
    threshold: 0,
    root: document,
    rootMargin: "0px"
  })

  useEffect(() => {
    if(isIntersecting){
      setNumbers([1000000, 500, 50, 30])
    } else {
      setNumbers([0, 0, 0, 0])
    }
  }, [isIntersecting])

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2600,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Container id="sobre-nosotros">
        <DarkOverlay />
        <Title>
          Con WQRLD Pass <br/>
          podes potenciar <br/>
          <TextTransition 
            style={{justifyContent: "center", marginTop: "8px"}} 
            springConfig={{
              tension: 210,
              friction: 20,
            }}
          >
            <span>
              {TEXTS[index % TEXTS.length]}
            </span>
          </TextTransition>
        </Title>
        <NumbersContainer ref={ref} >
          <NumbersItem>
            <article>
              <h3>+</h3>
              <AnimatedNumbers
                key={isIntersecting}
                includeComma
                locale={"es-AR"}
                transitions={() => (
                  isIntersecting ? 
                  {
                    type: "spring",
                    duration: 3,
                    delay: 0.3
                  }
                  : {}
              )}
                animateToNumber={numbers[0]}
              />
            </article>
              <p>Entradas emitidas</p>
          </NumbersItem>
          <NumbersItem>
          <article>
              <h3>+</h3>
              <AnimatedNumbers
                key={isIntersecting}
                includeComma
                locale={"es-AR"}
                transitions={() => ({
                  type: "spring",
                  duration: 2,
                  delay: 0.4
                })}
                animateToNumber={numbers[1]}
              />
            </article>
            <p>Eventos gestionados</p>
          </NumbersItem>
          <NumbersItem>
          <article>
              <h3>+</h3>
              <AnimatedNumbers
                key={isIntersecting}
                includeComma
                locale={"es-AR"}
                transitions={() => ({
                  type: "spring",
                  duration: 3,
                  delay: 0.6
                })}
                animateToNumber={numbers[3]}
              />
            </article>
            <p>Localidades</p>
          </NumbersItem>
        </NumbersContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  overflow: hidden;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(33, 39, 72, 1);
  background-image: url(./img/our_numbers_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -300px;
  background-blend-mode: luminosity;
  gap: 90px;
  padding: 70px ${spaces.horizontalPadding};
  @media only screen and (max-width: 800px) {
    background-size: auto 130vh;
    background-position-y: -30vh;
    background-position-x: -106vw;
    height: unset;
    padding: 70px 20px;
    gap: 50px;
  }
`

const DarkOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(33, 39, 72, 0.8);
  z-index: 1;
`

const Title = styled.h2`
  font-family: "StretchPro", "Nunito", sans-serif;
  color: ${elements.HeroTitle};
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 1.2px;
  span {
    font-family: "StretchPro", "Nunito", sans-serif;
    background-color: ${colors.secondary};
    padding: 0px 10px;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 40px;
    br {
      display: none;
    }
  }
`
const NumbersContainer = styled.div`
  display: flex;
  position: relative;
  padding: 48px 0 48px 36px;
  gap: 50px;
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: ${colors.accent};
    top: 0;
    left: 0;
  }
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: ${colors.accent};
    bottom: 0;
    left: 0;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 38px;
  }
  div:nth-of-type(1) > article {
    min-width: 300px;
  }
  div:not(:nth-of-type(1)) > article {
    min-width: 200px;
  }
`

const NumbersItem = styled.div`
  span > div > div:nth-of-type(1){
    width: 42px!important;
  }
  @media only screen and (max-width: 800px) {
    span > div > div:nth-of-type(1){
      width: 30px!important;
    }
  }
  article {
    display: flex;
    width: 100%;
  }
    * {
    font-family: "StretchPro", "Nunito", sans-serif;
    color: ${colors.accent};
    font-size: 40px;
    font-weight: 400;
    @media only screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  p {
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 4px;
    color: ${colors.white};
    @media only screen and (max-width: 800px) {
      margin-top: 8px;
    }
  }
`
import React from 'react'
import styled from '@emotion/styled'
import { elements } from '../theme'
import { useIntobs } from '../useIntobs'

export default function Card(props) {
  const isMobile = window.innerWidth <= 800

  const { isIntersecting, ref } = useIntobs({
    threshold: 1,
    root: document,
    rootMargin: "-10% 0% -10% 0%"
  })

  return (
    <CardContainer className={isIntersecting && isMobile ? 'hover-container' : ''} ref={ref} animationType={props.animationType}>
      <CardContent >
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardText>
          {props.text}
        </CardText>
      </CardContent>
      <div className={`card-before ${isIntersecting && isMobile && 'hover-card-before '}`} />
      <div className={`card-after ${isIntersecting && isMobile && 'hover-card-after '}`} />
    </CardContainer>
  )
}

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 24px;
  transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 99;
  * {
    user-select: none;
  }
  &:hover{
    transform: translate(0px, -16px);
    .card-before {
      rotate: -4deg;
      transform: scale(1) translateY(3%);
    }
    .card-after {
      rotate: 4deg;
      transform: scale(1) translateY(-3%);
    }
  }
  .card-before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #ced8ff;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -1;
    //
    transform: scale(0.9) ${props => props.animationType === "bottom" ? "translateY(5%)" : "translateY(-16%)"};
  }
  .card-after {
    position: absolute;
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #e1e7fb;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -2;
    //
    transform: scale(0.8) ${props => props.animationType === "bottom" ? "translateY(11%)" : "translateY(-34%)"};
  }
  .hover-container{
    transform: translate(0px, -16px);
  }
  .hover-card-before {
    rotate: -4deg;
    transform: scale(1) translateY(3%);
  }
  .hover-card-after {
    rotate: 4deg;
    transform: scale(1) translateY(-3%);
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 330px;
  width: 100%;
  background: ${elements.CardBackground};
  padding: 2vw;
  border-radius: inherit;
  @media only screen and (max-width: 800px) {
    padding: 30px;
  }
  div:first-of-type {
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    svg {
      width: 60px;
      height: auto;
      transform: translateX(2px);
    }
  }
`

const CardTitle = styled.h4`
  color: ${elements.CardTitle};
  text-transform: uppercase;
  font-size: 20px;
  max-width: 13ch;
  line-height: 20px;
  font-family: "StretchPro", "Nunito", sans-serif;
  font-weight: 400;
  margin-top: 36px;
  margin-bottom: 20px;
`

const CardText = styled.p`
  color:  ${elements.CardText};
  font-size: 16px;
  font-weight: 600;
`

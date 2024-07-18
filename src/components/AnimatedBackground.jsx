import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../theme'

export default function AnimatedBackground() {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  )
}

const Container = styled.div`
  @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #191e39;
  overflow: hidden;
  span {
    width: 18vmin;
    height: 18vmin;
    border-radius: 18vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 12;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  span:nth-of-type(1) {
    color: ${colors.accent};
    top: 57%;
    left: 5%;
    animation-duration: 166s;
    animation-delay: -37s;
    transform-origin: -5vw -15vh;
    box-shadow: 40vmin 0 5.251948361478537vmin currentColor;
  }
  span:nth-of-type(2) {
    color: #f4628e;
    top: 81%;
    left: 63%;
    animation-duration: 105s;
    animation-delay: -168s;
    transform-origin: 22vw -19vh;
    box-shadow: -40vmin 0 5.249149298786934vmin currentColor;
  }
  span:nth-of-type(3) {
    color: #1e285f;
    top: 87%;
    left: 52%;
    animation-duration: 179s;
    animation-delay: -131s;
    transform-origin: -11vw -6vh;
    box-shadow: 40vmin 0 5.31869486436171vmin currentColor;
  }
  span:nth-of-type(4) {
    color: #f4628e;
    top: 64%;
    left: 7%;
    animation-duration: 115s;
    animation-delay: -2s;
    transform-origin: -6vw -12vh;
    box-shadow: 40vmin 0 5.5834066616661655vmin currentColor;
  }
  span:nth-of-type(5) {
    color: ${colors.accent};
    top: 2%;
    left: 31%;
    animation-duration: 147s;
    animation-delay: -223s;
    transform-origin: 8vw -15vh;
    box-shadow: 40vmin 0 5.312743646214784vmin currentColor;
  }
  span:nth-of-type(6) {
    color: ${colors.accent};
    top: 1%;
    left: 57%;
    animation-duration: 298s;
    animation-delay: -160s;
    transform-origin: 7vw -3vh;
    box-shadow: 40vmin 0 5.987607502029759vmin currentColor;
  }
  span:nth-of-type(7) {
    color: #1e285f;
    top: 100%;
    left: 34%;
    animation-duration: 280s;
    animation-delay: -143s;
    transform-origin: -8vw -13vh;
    box-shadow: -40vmin 0 5.736842492458548vmin currentColor;
  }
  span:nth-of-type(8) {
    color: #f4628e;
    top: 44%;
    left: 65%;
    animation-duration: 92s;
    animation-delay: -159s;
    transform-origin: 17vw 17vh;
    box-shadow: 40vmin 0 5.689980232644453vmin currentColor;
  }
  span:nth-of-type(9) {
    color: ${colors.accent};
    top: 88%;
    left: 47%;
    animation-duration: 162s;
    animation-delay: -193s;
    transform-origin: 15vw 14vh;
    box-shadow: 40vmin 0 5.771727894157925vmin currentColor;
  }
  span:nth-of-type(10) {
    color: ${colors.accent};
    top: 20%;
    left: 17%;
    animation-duration: 82s;
    animation-delay: -170s;
    transform-origin: -2vw -10vh;
    box-shadow: 40vmin 0 5.284755403422581vmin currentColor;
  }
  span:nth-of-type(11) {
    color: #1e285f;
    top: 76%;
    left: 34%;
    animation-duration: 213s;
    animation-delay: -225s;
    transform-origin: -22vw -14vh;
    box-shadow: -40vmin 0 5.295557075579005vmin currentColor;
  }
  span:nth-of-type(12) {
    color: #1e285f;
    top: 20%;
    left: 47%;
    animation-duration: 351s;
    animation-delay: -47s;
    transform-origin: 23vw -13vh;
    box-shadow: 40vmin 0 5.674170303070254vmin currentColor;
  }
`
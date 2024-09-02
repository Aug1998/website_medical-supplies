import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import React from 'react';
import { colors } from '../style/theme';

export default function MobileNav({ isOpen, handleClick, children }) {
  return (
    <Container isOpen={isOpen} onClick={handleClick}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${colors.black}dd;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 34vh;
  gap: 40px;
  a {
    color: white;
    text-decoration: none;
    font-size: 28px;
  }
  z-index: -1;
  opacity: 0;
  ${
    props => props.isOpen ? (
      css`
        animation: fadeIn 0.3s ease-in-out forwards;
        `
    ) : (
      css`
        animation: fadeOut 0.2s ease-in-out forwards;
      `
    )
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      z-index: -1;
    }
    1% {
      opacity: 0;
      z-index: 999;
    }
    100% {
      opacity: 1;
      z-index: 999;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      z-index: 999;
    }
    99% {
      opacity: 0;
      z-index: 999;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
`

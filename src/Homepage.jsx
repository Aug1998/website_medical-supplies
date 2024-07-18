/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingImages from "./sections/FloatingImages";
import FloatingImagesGPT from "./sections/FloatingImagesGPT";
import Services from "./sections/Services";
import OurNumbers from "./sections/OurNumbers";
import Hero from "./sections/Hero";
import Button from './components/Button';
import { elements } from './theme'
import { scrollToElementById } from './utils';
import { css, keyframes } from '@emotion/react';

export default function Homepage() {
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  return (
    <>
      <Header handleHamburgerButton={() => setMobileNavIsOpen(true)} isMobile={isMobile}/>
      {isMobile && (
        <MobileNav isOpen={mobileNavIsOpen} onClick={() => setMobileNavIsOpen(false)}>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("caracteristicas")}} href="#">
            Características
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("sobre-nosotros")}} href="#">
            Sobre Nosotros
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("precios")}} href="#">
            Precios
          </a>
          <Button onClick={() => window.open("https://wa.me/5493412805006",'_blank')}>Get started</Button>
        </MobileNav>
      )}
      <PageContent>
        <Hero />
        <Services />
        {isMobile ? (
          <FloatingImagesGPT />
      ) : (
          <FloatingImages />
        )}
        <OurNumbers />
      </PageContent>
      <Footer></Footer>
    </>
  );
}

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`

const MobileNav = styled.div`
  overflow: hidden;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  top: 0px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  button {
    margin-top: 28px;
  }
  a {
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    color: ${elements.headerFont};
  }
  
  height: 100%;
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

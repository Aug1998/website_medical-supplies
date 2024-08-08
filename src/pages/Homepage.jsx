import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Logistica from "../sections/Logistica";
import LogisticaMobile from "../sections/LogisticaMobile";
import ProductRow from "../sections/ProductRow";
import Services from "../sections/Services";
import { Padding } from "../style/GlobalCss";
import { colors, elements } from "../style/theme";
import { useContentfulStore } from "../useContentfulStore";
import { scrollToElementById } from "../utils/utils";


export default function Homepage() {
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const { products } = useContentfulStore;

  return (
    <>
      <Header page="home" handleHamburgerContactButton={() => setMobileNavIsOpen(true)} isMobile={isMobile}/>
      {isMobile && (
        <MobileNav isOpen={mobileNavIsOpen} onClick={() => setMobileNavIsOpen(false)}>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("caracteristicas")}} href="./">
            Características
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("sobre-nosotros")}} href="./">
            Sobre Nosotros
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("precios")}} href="./">
            Precios
          </a>
        </MobileNav>
      )}
      <PageContent>
        <Hero />
        <Services />
        <Padding>
          <Title color={colors.primaryLight}>/ Productos</Title>
          <ProductRow />
          <ProductRow />
        </Padding>
        {isMobile ? (
          <LogisticaMobile />
      ) : (
          <Logistica />
        )}
        <Contact />
      </PageContent>
      <Footer />
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

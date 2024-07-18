/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'
import Button from "../components/Button";
import { scrollToElementById } from '../utils';

const Header = (props) => {
  const { isMobile } = props;

  return (
    <>
    <>
      <HeaderInner>
        <Logo src='img/logo.png'/>
        {isMobile && (
          <MobileNavButton onClick={() => props.handleHamburgerButton()}>
            <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke={colors.secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MobileNavButton>
        )}
        <Nav>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("caracteristicas")}} href="#">
            Características
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("sobre-nosotros")}} href="#">
            Sobre Nosotros
          </a>
          <a onClick={(e) => {e.preventDefault(); scrollToElementById("precios")}} href="#">
            Precios
          </a>
        </Nav>
        {!isMobile && (
          <Button onClick={() => window.open("https://wa.me/5493412805006",'_blank')}>Get started</Button>
        )}
      </HeaderInner>
    </>

    </>
  )
}

export default Header

const HeaderInner = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spaces.horizontalPadding};
  background-color: white;
  z-index: 99;
  background-color: ${elements.headerBackground};
  @media only screen and (max-width: 800px) {
    padding: 0 6vw;
  }
`

const Nav = styled.div`
  a {
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    color: ${elements.headerFont};
    &:not(:last-child) {
      margin-right: 32px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const Logo = styled.img`
  height: 54px;
`

const MobileNavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
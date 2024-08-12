/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from '@emotion/styled';
import { colors, elements, spaces } from '../style/theme';
import { scrollToElementById } from '../utils/utils';
import ProductsMenu from './ProductsMenu';

const Header = (props) => {
  const { isMobile } = props;

  return (
    <>
      <>
        <HeaderInner page={props.page}>
          <Logo page={props.page} src='../img/logo.png' onClick={() => window.open(`/`,"_self")}/>
          {isMobile && (
            <MobileNavButton onClick={() => props.handleHamburgerButton()}>
              <svg width="36px" height="36px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </MobileNavButton>
          )}
          <Nav page={props.page}>
            {props.page === 'home' && (
              <a onClick={(e) => {e.preventDefault(); scrollToElementById("caracteristicas")}} href="#">
                Qué hacemos
              </a>
            )}
            {props.page !== 'home' && (
              <a onClick={() => window.open(`/`,"_self")} href="#">
                Inicio
              </a>
            )}
            <ControlledNavItem page={props.page}>
              <a onClick={() => window.open(`/products`,"_self")} href="#">Productos</a>
              <ProductsMenu onClick={() => {}}/>
            </ControlledNavItem>
            <ContactButton type={props.page === "home" ? 'light' : 'dark'} page={props.page} onClick={() => window.open("https://wa.me/5493412805006",'_blank')}>
              Contacto
            </ContactButton>
          </Nav>
        </HeaderInner>
      </>
    </>
  )
}

export default Header

const HeaderInner = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spaces.horizontalPadding};
  z-index: 99;
  ${props => 
    props.page === "home" ? "background-color: #2b343b59;" : 
    props.page === "product" ? `
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `  : ""
  }
  backdrop-filter: blur(4px);
  * {
    font-family: 'Open Sans'!important;
  }
  @media only screen and (max-width: 800px) {
    padding: 0 6vw;
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  & > a{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: ${elements.headerFont};
    ${props => 
      props.page === "home" ? "color: white;" : 
      props.page === "product" ? `color: ${colors.primary};`  : ""
    }
    padding: 0 22px;
    transition: 0.3s;
    border-bottom: 4px solid transparent;
    &:hover {
      border-color: ${props => props.page === 'home' ? 'white' : colors.primary};
      & > div{
        display: flex;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const Logo = styled.img`
  cursor: pointer;
  height: 43px;
  ${props => 
    props.page === "home" ? "filter: grayscale(1) brightness(100);" : ""
  }
`

const MobileNavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  svg {
    stroke: white!important;
  }
`

const ContactButton = styled.button`
  all: unset; 
  border: ${props => props.type === 'light' ? 'white' : colors.primary} 2px solid;
  color: ${props => props.type === 'light' ? 'white' : colors.primary};
  background-color: transparent;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 10px 17px;
  text-transform: uppercase;
  transition: all 0.2s;
  letter-spacing: 2px;
  cursor: pointer;
  margin-left: 22px;
  &:hover{
    color: white;
    background-color: ${colors.primaryLight};
    border-color: ${colors.primaryLight};
  }
  `

  const ControlledNavItem = styled.div`
    cursor: pointer;
    height: 100%;
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 22px;
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 500;
      text-decoration: none;
      border-bottom: 4px solid ${props => props.page === 'product' ? colors.primary : 'transparent'};
      &:hover {
        border-color: ${props => props.page === 'home' ? 'white' : colors.primary};
      }
      ${props => 
        props.page === "home" ? "color: white;" : 
        props.page === "product" ? `color: ${colors.primary};` : ""
      }
    }

    &:hover {
      & > div{
        display: flex;
      }
    }
  `
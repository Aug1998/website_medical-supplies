import React from 'react'
import styled from '@emotion/styled'
import { elements } from '../theme'
import Icon from "./Icon";

export default function Footer() {
  return (
    <FooterContainer>
      <img 
      role='button'
      onClick={(e) => window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0
      })} src="./img/logo.png" alt="" />
      <SocialMedia>
        <Icon link={"https://www.instagram.com/wqrldpass"} icon={"instagram"} size={"22px"}></Icon>
        <Icon link={"https://www.linkedin.com/company/wqrld-pass/"} icon={"linkedin"} size={"22px"}></Icon>
      </SocialMedia>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  background-color: ${elements.footerBackground};
  padding: 45px 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  img {
    filter: brightness(1000) grayscale(1000);
    width: 82px;
  }
  @media only screen and (max-width: 800px) {
    padding: 36px 20px;
  }
`
const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
`
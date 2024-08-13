import styled from '@emotion/styled';
import Icon from "../components/Icon";
import { elements, spaces } from '../style/theme';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <img 
        role='button'
        onClick={(e) => window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0
        })} src="../img/logo.png" alt="" />
        <ContactData>
          <p><span>_dirección</span> Santa Fe 778 1° Piso</p>
          <p><span>_contacto</span> administracion@medicalsuppliessrl.com</p>
        </ContactData>
        <SocialMedia>
          <Icon link={"https://www.instagram.com/wqrldpass"} icon={"instagram"} size={"22px"}></Icon>
          <Icon link={"https://www.linkedin.com/company/wqrld-pass/"} icon={"linkedin"} size={"22px"}></Icon>
        </SocialMedia>
      </FooterTop>
      <Footerbottom>
        <p>Medical Supplies SRL | 2020 | Todos los derechos reservados</p>
      </Footerbottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 164px;
  }
`

const FooterTop = styled.div`
  background-color: ${elements.footerTopBackground};
  padding: 0 ${spaces.horizontalPadding};
  height: 184px;
  gap: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 50px ${spaces.horizontalPaddingMobile};
    height: unset;
    gap: 42px;
  }
`

const Footerbottom = styled.div`
  background-color: ${elements.footerBottomBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  p {
    font-size: 13px;
    color: #7FBBBA;
  }
  @media only screen and (max-width: 800px) {
    height: 84px;
    p {
      max-width: 31ch;
      text-align: center;
    }
  }
`

const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${elements.footerFont};
    span {
      margin-right: 6px;
      font-weight: 600;
      color: ${elements.footerTitleFont};
    }
  }
  @media only screen and (max-width: 800px) {
    p {
      &:first-of-type{
        margin-bottom: 12px;
      }
      span {
        display: block;
      }
    }
  }
`
  
const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  @media only screen and (max-width: 800px) {
    margin-left: unset;
  }
`
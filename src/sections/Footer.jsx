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
  @media only screen and (max-width: 800px) {
    padding: 36px 20px;
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
`

const Footerbottom = styled.div`
  background-color: ${elements.footerBottomBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  p {
    font-size: 13px;
    margin-bottom: 8px;
    color: #7FBBBA;
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
`
  
const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto
`
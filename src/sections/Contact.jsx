import styled from '@emotion/styled';
import React from 'react';
import ContactForm from "../components/ContactForm";
import { spaces } from '../style/theme';

export default function Contact() {
  return (
    <>
      <Content>
        <ContactForm />
      </Content>
    </>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(../img/contact.png);
  background-size: cover;
  padding: 100px ${spaces.horizontalPadding} 130px; 
  @media only screen and (max-width: 800px) {
    padding: 50px ${spaces.horizontalPaddingMobile}; 
  }
`

import React from 'react'
import styled from '@emotion/styled'
import ContactForm from "../components/ContactForm";
import { spaces } from '../css/theme'

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
`

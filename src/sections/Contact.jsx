import React from 'react'
import styled from '@emotion/styled'
import ContactForm from "../components/ContactForm";
import { spaces } from '../theme'

export default function Contact() {
  return (
    <>
      <Content>
      <BlueOverlay />
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

const BlueOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`
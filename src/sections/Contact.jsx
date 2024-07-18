import React from 'react'
import styled from '@emotion/styled'
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Content>
      <BlueOverlay />
        <ContactForm>
        </ContactForm>
      </Content>
    </>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-image: url(./img/contact.jpg);
  background-size: cover;
`

const BlueOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`
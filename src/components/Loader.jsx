import { keyframes } from '@emotion/react'
import styled from '@emotion/styled/macro'
import React from 'react'

export default function Loader() {
  return (
    <LoaderContainer>
      <div></div>
      <div></div>
      <div></div>
    </LoaderContainer>
  )
}

const loading = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`

const LoaderContainer = styled.div`
  color: #1c4c5b;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: currentColor;
    animation: ${loading} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0s;
  }
`



import React from 'react'
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'
import Icon from './Icon'

export default function ProductsMenu() {
  return (
    <Container>
      <LeftNav>
        <LeftNavOption>
          Cadera
          <Icon icon="arrowRightSmall"/>
        </LeftNavOption>
        <LeftNavOption>
          Rodilla
          <Icon icon="arrowRightSmall"/>
        </LeftNavOption>
      </LeftNav>
      <RightNav>
        <ProductTypeColumn>
          <h5>Cotilos</h5>
          <a>Producto</a>
          <a>Producto</a>
          <a>Producto</a>
          <a>Producto</a>
        </ProductTypeColumn>
        <ProductTypeColumn>
          <h5>Cotilos</h5>
          <a>Producto</a>
        </ProductTypeColumn>
      </RightNav>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  background-color: ${colors.primaryDark};
  top: 90px;
  right: 0;
  display: none;
  &:hover{
    display: flex;
  }
`

const LeftNav = styled.div`
  background-color: ${colors.primary};
`

const LeftNavOption = styled.div`
  width: 182px;
  padding: 24px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  &:hover{
    background-color: ${colors.primaryLight};
  }
  svg {
    fill: ${colors.accent};
  }
`

const RightNav = styled.div`
  width: 100%;
  display: flex;
`

const ProductTypeColumn = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 68px 26px 28px;
  font-family: 'Open Sans';
  h5 {
    color: ${colors.accent};
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 2px;
  }
  a {
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`

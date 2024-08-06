import React from 'react'
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'
import Icon from './Icon'

export default function ProductsMenu() {
  return (
    <Container>
      <ProductsNav>
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
      </ProductsNav>
      <BodypartNav>
        <BodypartItem>
          <Icon icon="arrowRightSmall"/>
          Cadera
        </BodypartItem>
        <BodypartItem>
          <Icon icon="arrowRightSmall"/>
          Rodilla
        </BodypartItem>
      </BodypartNav>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  background-color: ${colors.primaryDark};
  top: 90px;
  right: 0;
  display: none;
  display: flex;
  &:hover{
    display: flex;
  }
`

const BodypartNav = styled.div`
  background-color: ${colors.primary};
`

const BodypartItem = styled.div`
  min-width: 160px;
  padding: 23px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  position: relative;
  gap: 22px;
  &:hover{
    background-color: ${colors.primaryLight};
  }
  svg {
    fill: ${colors.accent};
    transform: rotate(180deg);
  }
`

const ProductsNav = styled.div`
  width: 100%;
  display: flex;
  padding: 23px 52px 28px;
  gap: 56px;
`

const ProductTypeColumn = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
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
    &:hover {
      text-decoration: underline;
    }
  }
`

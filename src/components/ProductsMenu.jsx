import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors, elements, spaces } from '../theme'
import Icon from './Icon'
import { useContentful } from '../hooks/useContentful'

export default function ProductsMenu() {
  const { uniquePartsOfBody, products, productsByType } = useContentful()
  const [activePartOfBody, setactivePartOfBody] = useState("")

  useEffect(() => {
    if (uniquePartsOfBody) {
      setactivePartOfBody(uniquePartsOfBody[0])
    }
  }, [uniquePartsOfBody])
  

  return (
    <Container>
      <ProductsNav>
      {productsByType && activePartOfBody && [...new Set(productsByType[activePartOfBody].map(product => product.fields.type))].map(type => {
          return (
            <ProductTypeColumn>
              <h5>{type}</h5>
              {products?.filter(product => product.fields.type === type).map(product => {
                return (
                <button onClick={() => window.open(`/producto/${product.sys.id}`,"_self")}>{product.fields.name}</button>
              )
              })}
            </ProductTypeColumn>
          )
        })}
      </ProductsNav>
      <BodypartNav>
        {uniquePartsOfBody?.map(item => {
          return (
            <BodypartItem 
              isActive={item === activePartOfBody}
              onClick={() => setactivePartOfBody(item)}
            >
              <Icon icon="arrowRightSmall"/>
              {item}
            </BodypartItem>
          )
        })}
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
  * {
    transition: all 0.3s;
  }
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
  background-color: ${props => props.isActive ? colors.primaryLight : ""};
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
  gap: 60px;
`

const ProductTypeColumn = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  font-family: 'Open Sans';
  h5 {
    color: ${colors.accent};
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 2px;
  }
  button {
    all: unset;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
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

import React from 'react'
import styled from '@emotion/styled'
import Title from '../components/Title'
import { spaces, colors } from '../theme'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'

export default function ProductsRow() {
  return (
    <Container id="productos">
      <Title color={colors.primaryLight}>/ Productos</Title>
      <section>
        <ProductsHelmet>
          <h4>_permédica</h4>
          <Button type={"dark"}>Ver más</Button>
        </ProductsHelmet>
        <ProductsContainer>
          <ProductCard name={"Producto 1"} img={'../img/product-sample.png'}/>
          <ProductCard name={"Producto 2"} img={'../img/product-sample.png'}/>
          <ProductCard name={"Producto 3"} img={'../img/product-sample.png'}/>
          <ProductCard name={"Producto 4"} img={'../img/product-sample.png'}/>
        </ProductsContainer>
      </section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-size: cover;
  padding: 100px ${spaces.horizontalPadding} 130px;
  gap: 56px;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`

const ProductsHelmet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h4 {
    font-weight: 500;
    font-size: 28px;
    color: ${colors.black};
    line-height: 33px;
    width: 160px;
  }
`

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 22px;
`


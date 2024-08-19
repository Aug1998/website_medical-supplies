import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { colors } from '../style/theme'
import { useContentfulStore } from '../useContentfulStore'

export default function ProductRow({ title, type }) {
  const [items, setItems] = useState([])
  const { getProductRowByBrandName } = useContentfulStore()

  useEffect(() => {
    if (getProductRowByBrandName) {
      getProductRowByBrandName(type).then(response => {
        setItems(response)
      })
    }
  }, [type])

  return (
    <>
      {items.length ? (
        <Container id="productos">
          <section>
            <ProductsHelmet>
              <h4>{title}</h4>
              <Button type={"dark"}>Ver más</Button>
            </ProductsHelmet>
            <ProductsContainer>
              {items.map((item, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={item}
                  />
                )
              })}
            </ProductsContainer>
          </section>
        </Container>
      ) : <></>}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-size: cover;
  margin-bottom: 60px;
  gap: 56px;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-bottom: 90px;
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
    width: fit-content;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 22px;
  @media only screen and (max-width: 800px) {
    align-items: center;
  }
`

import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { colors, spaces } from '../style/theme'
import { useContentfulStore } from '../useContentfulStore'

export default function ProductsPerCategory({ products }) {
  const [selectedCategory, setSelectedCategory] = useState()
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const { getProductRowByBrandName } = useContentfulStore()
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search)
    const selectedBrandFromParams = searchParams.get('marca')

    if (getProductRowByBrandName) {
      getProductRowByBrandName(selectedCategory).then(response => {
        setItems(response)
        const categoriesList = [...new Set(response.map(product => product.fields.brand))];
        setCategories(categoriesList)
        if (selectedBrandFromParams) {
          setSelectedCategory(selectedBrandFromParams)
        } else {
          setSelectedCategory(categoriesList[0])
        }
      })
    }
  }, [])

  return (
    <>
      {products ? (
        <Container id="productos">
          <section>
            <ProductsHelmet>
              {categories && categories.map((item, index) => (
                <HelmetItem 
                  key={index}
                  isSelected={selectedCategory === item} 
                  type={"dark"}
                  onClick={() => setSelectedCategory(item)}
                >
                  _{item}
                </HelmetItem>
              ))}
            </ProductsHelmet>
            <ProductsContainer>
              {products.filter(item => item.fields.brand === selectedCategory).map((item, index) => {
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
  padding: 60px ${spaces.horizontalPadding} 120px;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-bottom: 90px;
    gap: 20px;
    section {
      gap: 20px;
    }
  }
  `

const ProductsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  @media only screen and (max-width: 800px) {
    align-items: center;
    padding: ${spaces.horizontalPaddingMobile};
    grid-template-columns: 1fr;
  }
`

const ProductsHelmet = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 800px) {
    overflow-x: scroll;
    padding: 30px 20px 0;
    justify-content: flex-start;
  }
`

const HelmetItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.isSelected ? colors.primaryLight : "transparent"};
  padding: 15px 33px;
  font-weight: 500;
  font-size: 24px;
  color: ${props => props.isSelected ? colors.primaryLight : colors.black};
  line-height: 33px;
`
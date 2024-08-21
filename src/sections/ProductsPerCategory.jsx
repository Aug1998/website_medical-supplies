import styled from '@emotion/styled'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { colors, spaces } from '../style/theme'

export default function ProductsPerCategory({ products }) {
  return (
    <>
      {products ? (
        <Container id="productos">
          <section>
            <ProductsHelmet>
              <Button type={"dark"}>Ver más</Button>
            </ProductsHelmet>
            <ProductsContainer>
              {products.map((item, index) => {
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
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 2vw calc((100vw - ${spaces.horizontalPadding} * 2) / 100 * 2);
  @media only screen and (max-width: 800px) {
    align-items: center;
  }
`

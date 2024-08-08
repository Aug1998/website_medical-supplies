import styled from '@emotion/styled/macro';
import { useEffect } from 'react';
import Breadcrums from '../components/Breadcrums';
import { colors, spaces } from '../style/theme';
import ProductRow from './ProductRow';

export default function SingleProduct({ product }) {

  useEffect(() => {
    console.log(product);
  }, [product])
  
  return (
    <Container>
      <Breadcrums />
      <ProductContainer>
        <img src={product.image?.fields.file.url} alt='product'></img>
        <ProductData>
          <h5>{product.brand}</h5>
          <h3>{product.name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis ex at nesciunt magni molestiae similique corrupti rem unde ducimus! Minus autem facilis id! Voluptatibus saepe incidunt asperiores cum amet.</p>
        </ProductData>
      </ProductContainer>

      <ProductRow />
    </Container>
  )
}

const Container = styled.div`
  padding: 60px ${spaces.horizontalPadding} 120px;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  margin-bottom: 100px;
  img {
    width: 50%;
    max-width: 500px;
  }
  `

const ProductData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  h5 {
    color: ${colors.primary};
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  h3 {
    color: ${colors.black};
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 36px;
  }
  p {
    color: #6B6B6B;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
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


import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';
import { htmlStringFromRichText } from '../api/useContentfulStore.utils';
import Breadcrumbs from '../components/Breadcrumbs';
import Loader from '../components/Loader';
import { colors, spaces } from '../style/theme';
import ProductRow from './ProductRow';

export default function SingleProduct({ product }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  
  return (
    <Container isLoading={loading}>
      {product && !loading ? (
        <>
          <Breadcrumbs />
          <ProductContainer>
            <img src={product.image?.fields.file.url} alt='product'></img>
            <ProductData>
              <h5>{product.brand}</h5>
              <h3>{product.name.toLowerCase()}</h3>
              {product.description && (
                <div dangerouslySetInnerHTML={{__html: htmlStringFromRichText(product.description)}} />
              )}
            </ProductData>
          </ProductContainer>
          <ProductRow title='_artículos relacionados' />
        </>
      ) : (
        <Loader />
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 60px ${spaces.horizontalPadding} 120px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isLoading ? "center" : "flex-start"};
  justify-content: center;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  @media only screen and (max-width: 800px) {
    padding: 60px ${spaces.horizontalPaddingMobile} 120px;
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
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  `

const ProductData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  h5 {
    color: ${colors.primary};
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-left: 2px;
  }
  h3 {
    color: ${colors.black};
    text-transform: capitalize;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 30px;
  }
  p {
    color: #6B6B6B;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  div{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    h5 {
      font-size: 16px;
    }
    h3 {
      font-size: 36px;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`

import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';
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
                product.description.content.map(item => {
                  if (item.nodeType === 'paragraph') {
                    return (<><p>{item.content[0].value}</p><br /></>)
                  }
                  return (<><p>nothing</p><br /></>)
                }))
              }
              {/* <p>{product.description}</p> */}
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
    margin-bottom: 40px;
  }
  p {
    color: #6B6B6B;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
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


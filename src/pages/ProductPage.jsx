import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from '@emotion/styled/macro';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import { useContentful } from '../hooks/useContentful';
import SingleProduct from '../sections/SingleProduct';
import { colors, spaces } from '../theme';
import Breadcrums from '../components/Breadcrums';

export default function ProductPage() {
  let { productId } = useParams();
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const { getSingleProduct } = useContentful();
  const [product, setProduct] = useState()

  useEffect(() => {
    if (productId) {
      getSingleProduct(productId).then((product) => {
        setProduct(product)
      })
    }
  }, [productId])
  
  return (
    <>
      <Header page="product" handleHamburgerContactButton={() => setMobileNavIsOpen(true)} isMobile={isMobile}/>
      <PageContent>
        {product && (
          <SingleProduct product={product} />
        )}
        <Contact />
      </PageContent>
      <Footer></Footer>
    </>
  )
}

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  padding-top: 90px;
`
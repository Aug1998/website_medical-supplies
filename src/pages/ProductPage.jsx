import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import SingleProduct from '../sections/SingleProduct';
import { useContentfulStore } from '../useContentfulStore';

export default function ProductPage() {
  let { productId } = useParams();
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const { getSingleProduct } = useContentfulStore();
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
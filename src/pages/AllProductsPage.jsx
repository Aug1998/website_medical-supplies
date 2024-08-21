import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import HeroSmall from '../sections/HeroSmall';
import ProductsPerCategory from '../sections/ProductsPerCategory';
import { useContentfulStore } from '../useContentfulStore';

export default function AllProductsPage() {
  let { productId } = useParams();
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const { products } = useContentfulStore();
  const [product, setProduct] = useState()
  
  return (
    <>
      <Header 
        page="all_products" 
        handleHamburgerContactButton={() => setMobileNavIsOpen(true)} 
        isMobile={isMobile}
      />
      <PageContent>
        <HeroSmall title='nuestros productos'/>
        <ProductsPerCategory products={products}/>
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
`
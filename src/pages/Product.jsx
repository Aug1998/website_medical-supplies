import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from '@emotion/styled/macro';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Product() {
  let { productId } = useParams();
  const isMobile = window.innerWidth <= 800
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  // useEffect(() => {
  //   getSingleProduct()
  // }, [third])
  
  return (
    <>
      <Header page="product" handleHamburgerContactButton={() => setMobileNavIsOpen(true)} isMobile={isMobile}/>
     
      <PageContent>
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
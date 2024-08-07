import React from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
  let { productId } = useParams();

  // useEffect(() => {
  //   getSingleProduct()
  // }, [third])
  
  return (
    <div>{productId}</div>
  )
}

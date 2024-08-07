import { useEffect, useState } from 'react'

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export const useContentful = () => {
  const [products, setProducts] = useState()
  const [productsByType, setProductsByType] = useState()
  const [uniquePartsOfBody, setUniquePartsOfBody] = useState()
  const [uniqueTypes, setUniqueTypes] = useState()
  const [uniqueTypesByBodyPart, setUniqueTypesByBodyPart] = useState()

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])
  
  useEffect(() => {
    if (products) {
      setUniquePartsOfBody([...new Set(products.map(product => product.fields.part_of_body))])

      const productsByType = products.reduce((acc, product) => {
        if (!acc[product.fields.part_of_body]) {
          acc[product.fields.part_of_body] = [];
        }
        acc[product.fields.part_of_body].push(product);
        return acc;
      }, {});

      setProductsByType(productsByType)

      setUniqueTypes([...new Set(products.map(product => product.fields.type))])
    }
  }, [products])

  

  const getProducts = async () => {
    try {
      const products = await client.getEntries({
        content_type: "product",
        select: "fields"
      }).then((response) => {
        const items = response.items.map((item) => {
          return item
        })
        return items
      })
      return products
    } catch (error) {
      console.log(error)
    }
  }
  const getSingleProduct = async (productId) => {
    try {
      const product = await client.getEntry(productId,
      {
        select: "fields"
      })
      .then((response) => {
        return response.fields
      })
      return product;
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    products,
    uniquePartsOfBody,
    uniqueTypes,
    productsByType,
    getSingleProduct
  }
}
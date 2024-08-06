import { useEffect, useState } from 'react'

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export const useContentful = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])

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
      console.log(products);
      // return products
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    products
  }
}
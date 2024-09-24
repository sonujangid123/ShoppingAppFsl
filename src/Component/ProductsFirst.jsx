// import React from 'react'
import Product from "./Product"

function ProductsFirst({ProductsFirst}) {
  return ProductsFirst.map((product) => {
    return <Product key={product.id}  product={product}/>

  })
}

export default ProductsFirst
// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { ecomContext } from '../Home'
// import CartQty from './CartQty '

// function Product({ product }) {

//   const { handleAddToCart, isProductInCart } = useContext(ecomContext)



//   return (
//     <>

//       <div className="product" Link to="`product/product.id`">
//         <div className="product-photo">
//           <img src={product.attributes.image} alt={product.attributes.title} />
//         </div>
//         <div className="content">
//           <h3>{product.attributes.title}</h3>
//           <p>${(product.attributes.price / 100).toFixed(2)}</p>
//           {/* {isProductInCart(product) ? (
//          <CartQty product={product}/> 
//            ) : ( 
//           <Link to=""  onClick={() => handleAddToCart(product)}>Add To Cart</Link>
//            )} */}

//           {isProductInCart(product) ? (
//             // <CartQty product={product} />
//             <CartQty productID={product.id} />
//           ) : (
//             <Link to="" onClick={() => handleAddToCart(product)}>Add To Cart</Link>
//           )}
//         </div>
//       </div>


//     </>

//   )
// }

// export default Product



// import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import { ecomContext } from '../Home'
// import CartQty from './CartQty '
import ProductDetail from './ProductDetail'

function Product({ product }) {
  // const { handleAddToCart, isProductInCart } = useContext(ecomContext)

  return (
    <div className="product">
      {/* Link to product details page */}
      <Link to={`/product-details/${product.id}`} element={<ProductDetail />}>
        <div className="product-photo">
          <img src={product.attributes.image} alt={product.attributes.title} />
        </div>
      </Link>

      <div className="content">
        <h3>{product.attributes.title}</h3>
        <p>${(product.attributes.price / 100).toFixed(2)}</p>

        {/* Show CartQty if the product is in the cart, otherwise show Add to Cart */}
        {/* {isProductInCart(product) ? (
          <CartQty productID={product.id} />
        ) : (
          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        )} */}
      </div>
    </div>
  )
}

export default Product
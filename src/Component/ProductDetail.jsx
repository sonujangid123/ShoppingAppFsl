
import { useParams } from "react-router-dom";
import { useContext } from "react";
// import React, { useContext, useState } from 'react'
import { ecomContext } from "../Home";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams(); 
  const { handleAddToCart } = useContext(ecomContext)

  const [product, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://strapi-store-server.onrender.com/api/products/'+id);
      setProducts(response.data.data);
    }
    fetchData();
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  

  return (
    <div className="productDetail">
      <div className="detailLeft">
        <img src={product.attributes.image} alt={product.attributes.title} />
      </div>
      <div className="detailRight">
        <h1>{product.attributes.title}</h1>
        <h3>{product.attributes.company}</h3>
        {/* <p>Price: {product.attributes.price}</p> */}
        <p>${(product.attributes.price / 100).toFixed(2)}</p>
        <p>Description: {product.attributes.description}</p>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import App from "./App"
import Header from "./Component/Header"
import Products from "./Component/Products"
import { createContext, useState } from "react"
// import About from "./pages/About"
import ProductDetail from "./Component/ProductDetail"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount "

 




export const ecomContext = createContext(null)

function Home() {
  const [cart, setCart] = useState([]);

  // function handleAddToCart(productToAdd) {
  //   const productAddingToCart = { ...productToAdd, quantity: 1 };
  //   setCart([...cart, productAddingToCart])

  // }
  function handleAddToCart(productToAdd) {
    const existingProduct = cart.find((cartItem) => cartItem.id === productToAdd.id);
  
    if (existingProduct) {
      // Product already in cart, update its quantity
      setCart(
        cart.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Product not in cart, add it with quantity 1
      const productAddingToCart = { ...productToAdd, quantity: 1 };
      setCart([...cart, productAddingToCart]);
    }
  }
  
  console.log(cart);

  function isProductInCart(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound;
  }

  function handleRemoveFromCart(productID) {
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== productID;
      })
    );
  }


  function getProductQuantity(productID) {
    // const productFound = cart.find((cartItem)=>{
    //   return cartItem.id === productID;
    // });
    // return productFound.quantity;

    return cart.find((cartItem) => cartItem.id === productID).quantity;

  }

  function increment(productID) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productID
          ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem

      )
    )




  }

  // function decrement(productID) {
  //   setCart(
  //     cart.map((cartItem) =>
  //       cartItem.id === productID
  //         ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  //     )
  //   )
  // }

  function decrement(productID) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productID && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }
  

  // export const ecomContext = createContext(null);

  // function Home() {
  //   const [cart, setCart] = useState([]);

  //   function handleAddToCart(productToAdd) {
  //     const productAddingToCart = {...productAddingToCart, quantity: 1 }
  //     setCart([...cart, productToAdd]);
  //   }
  // console.log(cart);

  // function isProductInCart(product){
  //       const productFound =  cart.find((cartItem) =>{
  //        return cartItem.id === product.id;

  //      });
  //      return productFound

  // }


  // function handleRemoveFromCart(productToRemove){
  //    setCart(cart.filter((cartItem) =>{
  //     return cartItem.id !== productToRemove.id;
  //    }));
  // }









  return (
    <BrowserRouter>
      <ecomContext.Provider value={{ cart, setCart, handleAddToCart, isProductInCart, handleRemoveFromCart, increment, decrement, getProductQuantity }}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CreateAccount " element={<CreateAccount />}></Route>

          
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/product-details/:id" element={<ProductDetail />} />




        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  )
}

export default Home
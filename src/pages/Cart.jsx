// import React, { useContext, useEffect, useState } from 'react'
// import { ecomContext } from '../Home'
// import CartQty from '../Component/CartQty ';
// import { Link } from 'react-router-dom';
// import { MdCurrencyRupee } from "react-icons/md";
  

// function Cart() {
//     const {cart}=  useContext(ecomContext);
//     const [cartTotal , setCartTotal] = useState(0);
//     const [deliveryFees , setDeliveryFees] = useState(0);

//     useEffect(()=>{
//       let total = 0; 
//       cart.forEach((cartItem)=>{
//         total += cartItem.price * cartItem.quantity;
//       })

//       setCartTotal(total.toFixed(2));
//     }, [cart])


//   return (
//     <>
//       <h2>Your Shoping Cart</h2>
//       {
//         cart.length > 0 ? 
//         <div className="cart">
//         <div className="contents">
//           {cart.map((item)=>{
//             return(
//               <div className="cartItem" key={item.id}>
//                 <div className="left">
//                   <img src={item.attributes.image} alt=" Cart Item Image" />
//                 </div>
//                 <div className="right">
//                   <h4>{item.attributes.title}</h4>
//                   <p>Price: <MdCurrencyRupee />{(item.attributes.price / 100).toFixed(2)}</p>
//                   {/* <CartQty product={item}/> */}
//                   <CartQty productID={item.id}/>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//         <div className="total">
//           <h3>Order Summery</h3>
//           <ul>
//             <li>
//               <span>Items:</span>
//               <span>{cartTotal}</span>
//             </li>
//             <li>
//               <span>Delivery</span>
//               <span>{deliveryFees }</span>
//             </li>
//           </ul>
//           <hr />
//           <h3>
//             <span>Your Total:</span>
//             <span>{(Number(cartTotal) + Number(deliveryFees)).toFixed(2) }</span>
//           </h3>
//         </div>
//       </div>
//       : <h2>Your Cart is empty . <Link to="/" >Go Shopping</Link> </h2>
//       }
//     </>
//   )
// }

// export default Cart




// import React, { useContext, useEffect, useState } from 'react'
// import { ecomContext } from '../Home'
// import CartQty from '../Component/CartQty ';
// import { Link } from 'react-router-dom';
// import { MdCurrencyRupee } from "react-icons/md";

// function Cart() {
//   const { cart } = useContext(ecomContext);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [deliveryFees, setDeliveryFees] = useState(40);

//   useEffect(() => {
//     let total = 0;

//     // Corrected cartItem attribute access
//     cart.forEach((cartItem) => {
//       total += cartItem.attributes.price * cartItem.quantity; // accessing attributes properly
//     });

//     setCartTotal(total); // store as number and round in JSX
//   }, [cart]);

//   return (
//     <>
//       <h2>Your Shopping Cart</h2>
//       {
//         cart.length > 0 ?
//           <div className="cart">
//             <div className="contents">
//               {cart.map((item) => {
//                 return (
//                   <div className="cartItem" key={item.id}>
//                     <div className="left">
//                       <img src={item.attributes.image} alt="Cart Item Image" />
//                     </div>
//                     <div className="right">
//                       <h4>{item.attributes.title}</h4>
//                       <p>Price: <MdCurrencyRupee />{(item.attributes.price / 100).toFixed(2)}</p>
//                       {/* <CartQty product={item}/> */}
//                       <CartQty productID={item.id} />
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//             <div className="total">
//               <h3>Order Summary</h3>
//               <ul>
//                 <li>
//                   <span>Items:</span>
//                   <span><MdCurrencyRupee />{(Number(cartTotal) / 100).toFixed(2)}</span> {/* Rounding the final display */}
//                 </li>
//                 <li>
//                   <span>Delivery</span>
//                   <span><MdCurrencyRupee />{(Number(deliveryFees)).toFixed(2)}</span>
//                 </li>
//               </ul>
//               <hr />
//               <h3>
//                 <span>Your Total:</span>
//                 <span><MdCurrencyRupee />{((Number(cartTotal) + Number(deliveryFees)) / 100).toFixed(2)}</span>
//               </h3>
//             </div>
//           </div>
//           : <h2>Your Cart is empty. <Link to="/" >Go Shopping</Link> </h2>
//       }
//     </>
//   )
// }

// export default Cart;




import React, { useContext, useEffect, useState } from 'react'
import { ecomContext } from '../Home'
import CartQty from '../Component/CartQty ';
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

function Cart() {
  const { cart } = useContext(ecomContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryFees, setDeliveryFees] = useState(40); // Delivery fee fixed at 40 (assumed in rupees)

  useEffect(() => {
    let total = 0;

    // Corrected cartItem attribute access
    cart.forEach((cartItem) => {
      total += cartItem.attributes.price * cartItem.quantity; // accessing attributes properly
    });

    setCartTotal(total); // store as number and round in JSX
  }, [cart]);

  return (
    <>
      <h2>Your Shopping Cart</h2>
      {
        cart.length > 0 ?
          <div className="cart">
            <div className="contents">
              {cart.map((item) => {
                return (
                  <div className="cartItem" key={item.id}>
                    <div className="left">
                      <img src={item.attributes.image} alt="Cart Item Image" />
                    </div>
                    <div className="right">
                      <h4>{item.attributes.title}</h4>
                      <p>Price: <MdCurrencyRupee />{(item.attributes.price / 100).toFixed(2)}</p>
                      {/* <CartQty product={item}/> */}
                      <CartQty productID={item.id} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="total">
              <h3>Order Summary</h3>
              <ul>
                <li>
                  <span>Items:</span>
                  <span><MdCurrencyRupee />{(Number(cartTotal) / 100).toFixed(2)}</span> {/* Rounding the final display */}
                </li>
                <li>
                  <span>Delivery:</span>
                  <span><MdCurrencyRupee />{(Number(deliveryFees)).toFixed(2)}</span> {/* Fixed delivery fee */}
                </li>
              </ul>
              <hr />
              <h3>
                <span>Your Total:</span>
                <span><MdCurrencyRupee />{((Number(cartTotal) / 100) + Number(deliveryFees)).toFixed(2)}</span> {/* Final total including delivery fee */}
              </h3>
            </div>
          </div>
          : <h2>Your Cart is empty. <Link to="/" >Go Shopping</Link> </h2>
      }
    </>
  )
}

export default Cart;



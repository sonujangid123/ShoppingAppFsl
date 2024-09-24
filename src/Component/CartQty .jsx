import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../Home";
function CartQty({productID}) {
     const {handleRemoveFromCart  , increment , decrement , getProductQuantity} = useContext(ecomContext)
    
  return (
   <div className="miniCart">
     <div className="cartQty">
        <button onClick={ ()=>   increment(productID) } >+</button>
        <p>{getProductQuantity(productID)}</p>
        <button onClick={ ()=>  decrement(productID)}>-</button>
     </div>
     <MdRemoveShoppingCart  onClick={ () => handleRemoveFromCart(productID)} />
   </div>

  )
}

export default CartQty
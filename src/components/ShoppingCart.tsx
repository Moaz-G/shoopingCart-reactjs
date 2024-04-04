/*import { useShoppingCart } from "../context/ShoopingCartContext"
import ShoppingCartItemOverlay from "./ShoopingCartItemOverlay"
import ShoppingCartItem from "./ShoppingCartItem"
//import ShoppingCartItem from "./ShoppingCartItem"

export default function ShoppingCart() {
  const {
    cartItems
  } = useShoppingCart()

  if (cartItems.length == 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        No item found in cart!
      </div>
    )
  }

  else {
    return (
      <>
        <div className="grid grid-cols-1 gap-2 m-2.5">
          {
            cartItems.map((currCartItems) => {
              return (
                <ShoppingCartItem key={currCartItems.id} {...currCartItems} />
              )
            })
          }
        </div>
      </>
    )
  }
}
*/
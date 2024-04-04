import { useShoppingCart } from '../context/ShoopingCartContext';
import storeItems from '../data/items.json';

type ShoppingCartItemProps = {
    id: number;
    quantity: number;
}

export default function ShoppingCartItem({ id, quantity }: ShoppingCartItemProps) {
    const {
        removeFromCart,
    } = useShoppingCart()

    let cart = storeItems.find((indviItem => indviItem.id == id))
    //console.log(cart)
    if (cart == null) return null
   
        return (
            <>
                <div className='flex gap-x-1'>
                    <img src={cart.imgUrl} alt={cart.name} style={{ objectFit: "cover", height: "75px", width: "125px" }} />
                    <div className='flex flex-col self-center'>
                        <div>
                            <span>
                                {cart.name}{" "}{" "}
                            </span>
                            <span>
                                x{quantity}
                            </span>
                        </div>

                        <span>
                            {cart.price}
                        </span>
                    </div>
                    <div className='self-center ml-auto'>  <button onClick={() => removeFromCart(id)} className="bg-blue-500 py-0.5 px-0.5 rounded-md bg-red-500 text-white">Remove</button> </div>


                </div>
                <span className='text-end'>Total:{quantity * (cart.price)}</span>
            </>
        )
    }


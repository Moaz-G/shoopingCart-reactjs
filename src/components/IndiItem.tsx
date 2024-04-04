import { useShoppingCart } from "../context/ShoopingCartContext"

type indiItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export default function IndiItem({ id, name, price, imgUrl }: indiItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems
      } = useShoppingCart()
    let quantity = getItemQuantity(id)
    //console.log(cartItems)

    return (
        <div >
            <img src={imgUrl} alt={name} style={{height:"300px" , width:"100%"}} /> 
            <div className="flex justify-between mb-2.5	mt-2.5	">
                <span className="text-xl font-medium">
                    {name}
                </span>
                <span className="self-center text-slate-400">
                    ${price}
                </span>
            </div>
            {quantity == 0 ? <button className="w-full bg-blue-500 py-0.5 px-0.5 rounded-md text-white" onClick={() => increaseCartQuantity(id)}>+ Add to cart</button> :

                <div>
                    <div className="flex justify-around">

                        <button onClick={() =>decreaseCartQuantity(id)} className="text-xl font-normal">-</button>
                        <span>{quantity} in cart</span>
                        <button onClick={() => increaseCartQuantity(id)}>+</button>

                    </div>
                    <button onClick={() => removeFromCart(id)} className="w-full bg-blue-500 py-0.5 px-0.5 rounded-md bg-red-500">Remove</button>
                </div>
            }

        </div>
    )
}

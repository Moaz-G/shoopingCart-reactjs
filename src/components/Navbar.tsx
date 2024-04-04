import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoopingCartContext';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ShoppingCartItem from './ShoppingCartItem';

export default function Navbar() {
  const {
    handleToggle,
    setOpen,
    cartItems,
    open,
  } = useShoppingCart()
  let totalQuantity = 0
  cartItems.forEach(element => {
    totalQuantity += element.quantity
  });

  return (
    <>

      <div className="flex justify-between bg-blue-100 sticky top-0 px-2.5 py-2.5">
        <ul className="flex justify-evenly w-1/4">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/store" >Store</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {totalQuantity > 0 && (
          <button onClick={() => handleToggle()} className="py-0.5 px-1.5 w-6 h-6 bg-blue-500 rounded-md">
            <div className="relative"><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg><span className='absolute top-2 left-1 bg-red-500  w-4	h-4 text-xs text white rounded-lg'>{totalQuantity}</span></div>
          </button>
        )}
        {open && (<>

          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                              type="button"
                              className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              Panel title
                            </Dialog.Title>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">{
                            cartItems.length === 0 ? (
                              <div className="flex justify-center items-center h-screen">
                                No item found in cart!
                              </div>
                            ) : (
                              <>
                                <div className="grid grid-cols-1 gap-2 m-2.5">
                                  {cartItems.map((currCartItems) => (
                                    <ShoppingCartItem key={currCartItems.id} {...currCartItems} />
                                  ))}
                                </div>
                              </>
                            )
                          }
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
        )

        }

      </div>
    </>
  );
}


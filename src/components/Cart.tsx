'use client'

import { ProductType } from '@/interface'
import { deleteFomCart, reset, increament, decreament, calculate } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const router = useRouter()
    const { cartItems, total } = useSelector((store: any) => store.cartReducer)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(calculate())
    },[cartItems])


    return <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto ">
        <h2 className="text-xl font-semibold">{cartItems.length === 0 ? 'Cart is empty yet :(' : 'Your cart' }</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
            {cartItems.map((product: ProductType) => {
                return <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0  w-15 h-15 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.image} alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">{product.title}</h3>
                                    <p className="text-sm dark:text-gray-400">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">${product.price}</p>
                                    <p className="text-sm line-through dark:text-gray-600">$ {product.price * 2}</p>
                                </div>
                            </div>
                            <div className="flex text-sm justify-between ">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                        <rect width="32" height="200" x="168" y="216"></rect>
                                        <rect width="32" height="200" x="240" y="216"></rect>
                                        <rect width="32" height="200" x="312" y="216"></rect>
                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                    </svg>
                                    <span onClick={() => dispatch(deleteFomCart(product.id))}  >Remove</span>
                                </button>
                                <div className=' flex gap-x-4 items-center justify-center'  >
                                    <button onClick={() => dispatch(decreament(product.id))} className='px-2 hover:bg-red-700 hover:text-white rounded-md ' >-</button>
                                    <p>{product.amount}</p>
                                    <button onClick={() => dispatch(increament(product.id))} className='px-2 hover:bg-blue-700 hover:text-white rounded-md'  >+</button>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">$ {(product.price * product.amount).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            })}
            {cartItems.length > 0 &&
            <button onClick={() => dispatch(reset())} className=' bg-red-700  text-white py-2 hover:bg-red-500 hover:text-black '  >Reset</button>}
        </ul>
        <div className="space-y-1 text-right">
            <p>Total amount: 
                <span className="font-semibold"> $:  {(total).toFixed(2)}</span>
            </p>
        </div>
        <div className="flex justify-end space-x-4">
            {cartItems.length > 0 &&
            <button  onClick={()=> router.push('checkout')}  type="button" className="px-6 py-2 border rounded-md  bg-blue-800  text-white hover:bg-transparent hover:text-black  hover:border-black ">
              Continue to Checkout
            </button>}
        </div>
    </div>
}

export default Cart
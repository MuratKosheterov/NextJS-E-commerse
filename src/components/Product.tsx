'use client'

import { ProductType } from '@/interface'
import { addToCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

const Product: FC<{ product: ProductType }> = ({ product }) => {

    const dispatch = useDispatch()

    return (
        < div className="h-96 flex flex-col group  p-10 ">
            <Link href={`product/${product.id}`} className='relative max-h-72 flex-1 hover:scale-105 transition duration-200 ease-out '>
                <Image src={product.image} alt={product.title} fill />
            </Link>
            <div className="mt-5">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
                <p className="leading-relaxed line-clamp-2">{product.title}</p>
                <div className=' flex justify-between ' >
                    <p className=' font-bold' > Price: </p>
                    <p className=' font-bold mr-3' >${product.price}</p>
                </div>
            </div>
            <button onClick={()=> dispatch(addToCart(product))}  className=' buttob bg-blue-600 rounded-md mt-1 hover:text-white hover:bg-blue-900 py-1' >Add to cart</button>
        </ div>
    )
}

export default Product
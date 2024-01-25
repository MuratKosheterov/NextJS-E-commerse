import { ProductType } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Product: FC<{ product: ProductType }> = ({ product }) => {
    return (
        <Link href={`product/${product.id}`} className="h-96 flex flex-col group hover:scale-105 transition duration-200 ease-out p-10 ">
            <div className='relative max-h-72 flex-1'>
                <Image src={product.image} alt={product.title} fill />
            </div>
            <div className="mt-5">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
                <p className="leading-relaxed line-clamp-2">{product.title}</p>
                <div className=' flex justify-between ' >
                    <p className=' font-bold' > Price: </p>
                    <p className=' font-bold mr-3' >${product.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product
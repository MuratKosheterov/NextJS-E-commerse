'use client'

import Loading from '@/components/Loading';
import { ProductType } from '@/interface';
import { addToCart } from '@/redux/slices/cartSlice';
import { Dialog } from '@headlessui/react';
import { constants } from 'buffer';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function ProductDetailPage() {
    
    const dispactch = useDispatch()
    const [isOpen, setIsOpen] = useState(true)
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState<ProductType>();
    const { id } = useParams()
    const router = useRouter()

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const responsive = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await responsive.json()
            setProduct(product);
            setLoading(false)
        }
        getData()
    }, [id])

    return (
        <Dialog open={isOpen} onClose={() => { setIsOpen(false); router.back() }} className='relative z-50' >
            <div className=' fixed inset-0  bg-black/30' aria-hidden='true' />
            <div className='fixed inset-0 overflow-y-auto' >
                <div className=' flex  min-h-full items-center justify-center p-5' >
                    <Dialog.Panel className='mx-auto max-w-3xl rounded bg-white p-10   '>
                        {loading ? (<Loading/>) : (
                            <div className='flex gap-x-8 h-96 ' >
                                {product?.image && (
                                    <div className='relative w-72 h-full md:inline' >
                                        <img src={product.image} alt="" width={500} />
                                    </div>
                                )}
                                <div className=' flex-1 flex flex-col justify-between ' >
                                    <p className=' font-semibold' >{product?.title}</p>
                                    <div className=' flex items-center' >
                                    </div>
                                    <div className=' flex flex-col  gap-5 mt-5 text-white' >
                                        <button onClick={()=> dispactch(addToCart(product)) } className=' button bg-blue-500 w-full py-1' >Add to bag</button>
                                        <button onClick={()=> window.location.reload()}  className=' button bg-blue-500 w-full py-1' >View full details</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default ProductDetailPage
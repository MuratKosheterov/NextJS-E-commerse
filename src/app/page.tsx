import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Statistic from '@/components/Statistic';
import { ProductType } from '@/interface';
import React from 'react'

const Home = async () => {
  const responsive = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await responsive.json();

  return (
    <div className='min-h-screen max-w-7xl mx-auto px-8 mt-5'>
      <Hero/>
      <Statistic/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ' >
      {products.map((product)=> {
        return <Product key={product.id}  product={product} />
      })}
      </div>
      <Features/>
    </div>
  )
}

export default Home
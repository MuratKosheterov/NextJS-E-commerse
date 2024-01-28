import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: {
    id: string
  };
}

const ProductDetailPage = async ({ params: { id } }: Props) => {
  
  try {
    const responsive = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await responsive.json()
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={product.image} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {product.title}
            </h1>
            <div className=' flex  py-10 ' >
              <p>{product.category}</p>
              <p className=' ml-4'  >{product.rating.rate}</p>
            </div>

            <p className="mb-8 leading-relaxed">{product.description}</p>
            <div className="flex justify-center">
              <Link href={'/'} >
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    notFound()
  }
}

export default ProductDetailPage
'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'


function Navbar() {

    const {amount} = useSelector((state: any)=> state.cartReducer)
    const router = useRouter()
    
    return (
        <header className='flex justify-between items-center py-5 px-24 shadow-lg ' >
            <Link href={'/'}> <h2 className=' uppercase font-bold '  >Fashion and Mashion</h2> </Link>
            <nav className='nav space-x-5'>
                <Link href={'/'} >Home</Link>
                <Link href={'about'} >About</Link>
                <Link href={'contact'} >Contact</Link>
                <Link href={'products'} >Products</Link>
            </nav>
            <div className='' >
                <button  onClick={()=> router.push('register')} className='button  cursor-pointer border border-1 px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-transparent hover:text-black hover:border-indigo-600'>Register</button>
                <button onClick={()=> router.push('login')}  className='button  ml-3 cursor-pointer border border-1 px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-transparent hover:text-black hover:border-indigo-600'>Login</button>
                <button onClick={()=> router.push('cart')}   className='button  ml-3 cursor-pointer border border-1 px-5 py-1 rounded-md bg-indigo-600 text-white hover:bg-transparent hover:text-black hover:border-indigo-600'>Cart {amount} </button>
            </div>
        </header>
    )
}

export default Navbar
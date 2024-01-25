import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <header className='flex justify-between items-center py-5 px-24 shadow-lg' >
            <Link href={'/'}> <h2 className=' uppercase font-bold '  >Fashion and Mashion</h2> </Link>
            <nav className='nav space-x-5'>
                <Link href={'/'} >Home</Link>
                <Link href={'about'} >About</Link>
                <Link href={'contact'} >Contact</Link>
                <Link href={'product'} >Products</Link>
            </nav>
            <div className='' >
                <button className='button  cursor-pointer border border-1 px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-transparent hover:text-black hover:border-indigo-600'>Register</button>
                <button className='button  ml-3 cursor-pointer border border-1 px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-transparent hover:text-black hover:border-indigo-600'>Login</button>
            </div>
        </header>
    )
}

export default Navbar
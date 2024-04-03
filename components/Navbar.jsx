import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex gap-4 justify-end bg-gray-700 text-white py-2'>
        <Link
        href='/'
        >
        
            <p>Home</p>
        </Link>
        <Link
        href='/about'
        >
        
            <p>About</p>
        </Link>

        <Link
        href='/signin'
        >
            <p>Sign In</p>
        </Link>
        
    </div>
  )
}

export default Navbar
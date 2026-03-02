import React from 'react'
import About from './About'
import Help from './Help'
import Home from './Home'
const Navbar = () => {
  return (
    <nav className=' flex justify-between bg-blue-100 w-full p-6'>
        <div>
            SOLIMA
        </div>
        <div className=' flex '>
            <ul className='flex gap-4 '>
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/Help">Help</a>
                </li>
            </ul>
        </div>


    </nav>
  )
}

export default Navbar

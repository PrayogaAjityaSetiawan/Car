import React from 'react'
import logoHeader from '/image/logoHeader.svg'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navbar = () => {
  

  const navbar = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'Car',
      path: '/car'
    },
    {
      id: 3,
      title: 'Add Car',
      path: '/add-car'
    }
  ]
  const navActive = ({isActive}) => (isActive ? 'bg-[#627254] py-1 px-2 text-white ' : 'text-black py-1 px-2')
  return (
    <nav className=' bg-white w-full border-b shadow-sm p-4 font-poppins'>
        <header 
        className='flex justify-between items-center'>
            <img src={logoHeader} className='w-[100px] md:w-[200px]' alt="logo" />
            <div className='flex items-center gap-3'>
                {navbar.map(nav => (
                  <NavLink  key={nav.id} to={nav.path} className={navActive} >{nav.title}</NavLink>   
                ))}
            </div>
        </header> 
    </nav>
  )
}

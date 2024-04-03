import React from 'react'
import logoHeader from '/image/logoHeader.svg'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const navActive = ({isActive}) => (isActive ? 'bg-[#627254] py-1 px-2 text-white rounded-md' : 'text-black')
  return (
    <nav className=' bg-white w-full border-b shadow-sm p-4 font-poppins'>
        <div className='flex justify-between items-center'>
            <img src={logoHeader} className='w-[100px] md:w-[200px]' alt="" />
            <div className='flex items-center gap-3'>
                <NavLink to='/' className={navActive} >Home</NavLink>
                <NavLink to='/car' className={navActive} >Car</NavLink>
                <NavLink to='/add-car' className={navActive} >Add Car</NavLink>
            </div>
        </div>
    </nav>
  )
}

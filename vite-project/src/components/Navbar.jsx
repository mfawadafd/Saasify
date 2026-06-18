import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)

  return (
    // Navbar section
    <div className='relative flex items-center px-5 py-4 justify-between font-medium border-b-2 border-gray-200'>
      {/* ----------Desktop Menu ---------- */}
      <Link to={"/"} ><img src={logo} alt="logo" /></Link>
      <ul className='hidden md:flex items-center gap-4 justify-between font-medium text-gray-500'>
        <li>
          <NavLink to={"/Features"}>
           {({isActive})=>(
            <>
            <span>Features</span>
            {isActive ? <hr className='bg-blue-500 px-1 py-px'/> : ''}
            </>
           )}
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Pricing"}>
           {({isActive})=>(
            <>
            <span>Pricing</span>
            {isActive ? <hr className='bg-blue-500 px-1 py-px'/>:''}
            </>
           )}
          </NavLink>
        </li>

        <li>
          <NavLink to={"/Testimonials"}>
           {({isActive})=>(
            <>
            <span>Testimonials</span>
            {isActive ? <hr className='bg-blue-500 px-1 py-px'/>:''}
            </>
           )}
            </NavLink></li>
        <li>
          <NavLink to={'/Resources'}>
          {({isActive})=>(
            <>
            <span>Resources</span>
            {isActive ? <hr className='bg-blue-500 px-1 py-px'/>:''}
            </>
          )}
          </NavLink>
          </li>
        <li><NavLink>Contact</NavLink></li>
      </ul>
      <div className='hidden md:block'>
        <Button btn_Text={'Get Started'} />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
        <Menu size={28} />
      </button>
      {/* ---------Mobile Menu ---------- */}
      {isOpen && (
        <div className='absolute top-full inset-x-0 w-full  box-border bg-white border-t md:hidden flex flex-col gap-4 px-5 py-4 z-50 shadow-md '>
          <NavLink to="/Features" onClick={() => setIsOpen(false)} className={({ isActive }) => `
          px-4 py-2 rounded-md ${isActive ? 'bg-blue-400 text-white' : ''}`}>Features</NavLink>
          <NavLink to="/Pricing" onClick={() => setIsOpen(false)} className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-blue-400 text-white' : ''}`}>Pricing</NavLink>
          <NavLink to={'/Testimonials'} onClick={() => setIsOpen(false)} className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-blue-400 text-white' : ''}`}>Testimonials</NavLink>
          <NavLink to={'/Resources'} onClick={() => setIsOpen(false)} className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-blue-400 text-white' : ''}`}>Resources</NavLink>
          <NavLink to={'/Contact'} onClick={() => setIsOpen(false)} className={({ isActive }) => `px-4 py-2 rounded-md ${isActive ? 'bg-blue-400 text-white' : ''}`}>Contact</NavLink>
          <Button btn_Text={'Get Started'} />
        </div>
      )}
    </div>
  )
}

export default Navbar
import React from 'react'

import Social from "./Social"
import Logo from "../img/header/logo.svg"
import MobileNav from "./MobileNav"

import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={"/"} className='max-w-[200px]'>
          <img src={Logo}></img>
        </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={"/"} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to={"/about"} className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to={"/portfolio"} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to={"/contact"} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>

      <Social />

      <MobileNav />
    </header>
  )
}

export default Header
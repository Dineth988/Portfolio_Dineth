import React, { useRef } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import dw_logo from '../../assets/dw_logo.png'
import menu_close from '../../assets/menu_close.svg'
import menu_open from '../../assets/menu_open.svg'


const NavBar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar flex items-center justify-between my-5  xl:mx-[170px] md:mx-[30px] max-md:my-[20px] max-md:mx-[50px] lg:mx-[80px]'>
      <img src={dw_logo} alt=""height={0} width={140}/>
      <img src={menu_open} onClick={openMenu} alt="" className=' hidden max-md:block max-md:fixed max-md:right-[30px] '/>
      <ul ref={menuRef} className='flex items-center list-none gap-[60px] text-[17px] max-md:fixed max-md:flex-col max-md:items-start max-md:top-0 max-md:gap-[30px] max-md:bg-[#1F0016] max-md:w-[350px] max-md:h-full max-md:z-[2] max-md:transition-[right] max-md:duration-[0.5s] max-md:right-[-350px] '>
        <img src={menu_close} alt="" onClick={closeMenu} className=' hidden max-md:block max-md:relative max-md:top-[30px] max-md:left-[290px] max-md:w-[30px] '/>
        <li className='max-md:text-[30px] max-md:pl-[100px] max-md:flex-row max-md:gap-[20px] '><AnchorLink href='#home'>Home</AnchorLink></li>
        <li className='max-md:text-[30px] max-md:pl-[100px] max-md:flex-row max-md:gap-[20px] '><AnchorLink offset={20} href='#about'>About Me</AnchorLink></li>
        <li className='max-md:text-[30px] max-md:pl-[100px] max-md:flex-row max-md:gap-[20px] '><AnchorLink offset={50} href='#work'>Projects</AnchorLink></li>
        <li className='max-md:text-[30px] max-md:pl-[100px] max-md:flex-row max-md:gap-[20px] '><AnchorLink offset={20} href='#offers'>Offers</AnchorLink></li>
      </ul>
      <div className='px-5 py-3 rounded-[50px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] text-[17px] cursor-pointer hover:scale-105 transition-transform duration-300 ma max-md:hidden '><AnchorLink offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar
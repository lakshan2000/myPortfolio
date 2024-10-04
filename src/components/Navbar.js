import React from 'react'
import { Link } from 'react-scroll'
import {logo}from "../assets/index"
import {navLinksData} from '../constants'

export const Navbar = () => {
  return (
    <div className='flex items-center sticky top-0 z-50 bg-bodyColor justify-between w-full h-24 mx-auto border-b font-titleFont-b-[1px] border-b-gray-600'>
        <div>
            <img className='w-[200px] h-[50px]' src={logo} alt='logo'/> 
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navLinksData.map(({id, title, link}) => (
                        <li className='text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor'  key={id}>
                            <Link activeClass='active' to={link} spy={true} offset={-70} smooth={true} duration={500}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}


import React from 'react'
import { FaTwitter, FaFacebookF,FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='resume' className='w-full h-52 border-b-[1px] group bg-black bg-opacity-25 flex gap-4'>
        <div className='flex flex-col items-center justify-center w-1/3 gap-3 m-8 text-left text-gray-400 duration-300 group-hover:text-white'>
            <h2 className="text-xl font-bold">Lakshan Ekanyaka</h2>
            <p className="text-sm">© 2024 lakshanekanayaka. All rights reserved.</p>
        </div>
        <div className='flex items-center justify-center w-1/3 gap-3 m-8 '>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className='rounded-full bannerIcon'><FaFacebookF/></span>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <span className='rounded-full bannerIcon'><FaLinkedinIn/></span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" >
                <span className='rounded-full bannerIcon'><FaTwitter/></span>
            </a>
        </div>
        <div className="flex flex-col justify-center w-1/3 gap-3 m-8 text-right text-gray-400 duration-300 items-right group-hover:text-white">
            <p>lakshanekanayaka2000@gmail.com</p>
            <p>+94 70 1674282</p>
            <p >Privacy Policy</p>
        </div>

    </section>
  )
}

export default Footer
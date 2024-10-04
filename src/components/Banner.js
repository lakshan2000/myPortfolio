import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaTwitter, FaFacebookF,FaLinkedinIn  } from "react-icons/fa";
import { FaJava,FaPhp, FaReact,} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

import { bannerImg } from '../assets';

export const Banner = () => {

  const [text] = useTypewriter({
    words: ["Full-Satck Developer.","Front-End Developer.","Back-End Developer."],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000
  });

  
  return (
    <section id='home' className='w-full py-20 pt-15  flex border-b-[1px] border-b-black font-titleFont'>
      
    <div className='flex flex-col w-1/2 gap-20' >
      <div className='flex flex-col gap-5'> 
        <h4 className='text-lg font-normal'>HELLO WELCOME TO MY WORLD</h4>
        <h1 className='text-6xl font-bold text-white'>
          Hi, I'm <span className='capitalize text-designColor'> Lakshan Ekanayaka</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#ff014f'
          />
        </h2>
        <p className='text-base leading-6 tracking-wide font-bodyFont'>
          I use the as a third party jjhd nbv jkjkd hfyyr terw  rwvsbs dkd mc,mxcn skaldkls wopowie ydyeg fhgj mncj jhdk lls ksjjd shhd ueye uyrur llf mn.
          
        </p>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className='mb-4 text-base uppercase font-titleFont'>Find me in</h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'><FaTwitter/></span>
            <span className='bannerIcon'><FaFacebookF/></span>
            <span className='bannerIcon'><FaLinkedinIn/></span>
          </div>
        </div>
        <div>
          <h2 className='mb-4 text-base uppercase font-titleFont'>Best Skill On</h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'><FaReact/></span>
            <span className='bannerIcon'><FaJava/></span>
            <span className='bannerIcon'><IoLogoJavascript /></span>
            <span className='bannerIcon'><FaPhp/></span>
          </div>
        </div>
      </div>
 
    </div>
    
    <div className='relative flex items-center justify-center w-1/2' >
      <img 
        className='w-[1200px] h-[450px] z-10' 
        src={bannerImg} 
        alt='bannerImg'
      />
      <div className='absolute bottom-0 w-[400px] h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
      
    </div>

  </section>

  )
}



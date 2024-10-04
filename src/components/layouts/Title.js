import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className='flex flex-col gap-4 mb-14 font-titleFont'>
        <h3 className='text-sm font-light tracking-wide uppercase text-designColor'>
          {title}
        </h3>
        <h1 className='text-5xl font-bold text-gray-300 capitalize'>
          {des}   
        </h1>
    </div>
  )
}

export default Title  

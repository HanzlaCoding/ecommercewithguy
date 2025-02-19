import React from 'react'

const panel = () => {
  return (
    <div className="w-full capitalize text-sm font-medium h-[5vh]">
      <div className="container flex w-full justify-between h-full mx-auto">
        <ul className='w-[50%] h-full items-center flex'>
          <li><a href="#" className=''>home</a></li>
          <li><a href="#" className='pl-7'>shop</a></li>
          <li><a href="#" className='pl-7'>Fruits & Vegetables</a></li>
          <li><a href="#" className='pl-7'>Beverages</a></li>
          <li><a href="#" className='pl-7'>blog</a></li>
          <li><a href="#" className='pl-7'>contact</a></li>
        </ul>
        <ul className='w-[40%] h-full justify-end flex items-center'>
          <li><a href="#">Trending Products</a></li>
          <li><a href="#" className='px-7'>Almost Finished</a></li>
          <li><a href="#" className='bg-linear-to-r from-[#DC2626] to-[#EA580C] uppercase text-white  rounded p-1'>sale</a></li>
        </ul>
      </div>
    </div>
  )
}

export default panel
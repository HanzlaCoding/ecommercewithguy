import React from 'react'
import banner1 from '/Images/banner-01.jpg'

const Card = () => {
  return (
    <div>
        <div style={{backgroundImage:`url(${banner1})`}} className="card w-96 bg-yellow-500 rounded-md p-5">
              <div className="card-body">
                <p className='text-[#EA580C] text-sm'>Only This Week</p>
                <h3 className='text-2xl font-bold leading-7'>Quality eggs at an <br /> affordable price</h3>
                <p className='text-[#6B7280]'>Eat on every day</p>
                <button className='px-4 mt-3 py-1 rounded-full bg-[#fff]'>Shop Now</button>
              </div>
        </div>
    </div>
  )
}

export default Card;
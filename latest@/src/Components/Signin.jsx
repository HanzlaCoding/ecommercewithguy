import React from 'react'

const Signin = () => {
  return (
    <>
    <div className="w-full capitalize text-sm font-medium h-[100vh]">
        <div className="container size-full mx-auto">
            <div className="w-[40%] h-full mt-10 flex flex-col items-center mx-auto">
                <div className="w-full h-[20%] flex-col flex items-center justify-evenly">
                    <h3 className='text-3xl font-semibold'>sign in<span className='text-[#9CA3AF] ml-4'>Register</span></h3>
                    <p className='mt-2 text-xs text-balance'>There are many advantages to creating an account: the payment process is
                    faster, shipment tracking is possible and much more.</p>
                </div>
                <div className="flex flex-col justify-evenly w-full h-[50%]">
                    <p className=''>Username*</p>
                    <input type="text" className='bg-white border-1 rounded h-10 capitalize pl-2 w-[100%]' placeholder='enter your email' />
                    <p className=''>email address *</p>
                    <input type="text" className='bg-white border-1 rounded h-10 capitalize pl-2 w-[100%]' placeholder='enter your email' />
                    <p className=' '>Password *</p>
                    <input type="text" className='bg-white border-1 rounded h-10 capitalize pl-2 w-[100%]' placeholder='enter your email' />
                </div>
                <div className="w-full flex items-center h-[5%]">
                    <input type="radio" name="" id="" />
                    <span className=''>Remember me</span>
                    <input type="radio" className='ml-40' name="" id="" />
                    <span className=''>Remember me</span>
                </div>
                <div className="w-full flex justify-evenly flex-col items-center h-[25%]">
                    <p className='text-xs'>Your personal data will be used to support your experience throughout this
website, to manage access to your account, and for other purposes described in
our privacy policy.</p>
                    <button className='bg-[#634C9F] rounded-xl w-[100%] text-white capitalize  h-[30%]'>log in</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin
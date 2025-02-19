import React from 'react'

const Login = () => {
  return (
    <>
    <div className="w-full capitalize text-sm font-medium h-[72vh]">
        <div className="container size-full mx-auto">
            <div className="w-[40%] h-full mt-10 flex flex-col items-center mx-auto">
                <div className="w-full h-[25%] flex-col flex items-center justify-evenly">
                    <h3 className='text-3xl font-semibold'>Login <span className='text-[#9CA3AF] ml-4'>Register</span></h3>
                    <p className='mt-2'>If you have an account, sign in with your username or email address.</p>
                </div>
                <div className="flex flex-col justify-evenly w-full h-[40%]">
                    <p className=''>Username or email address *</p>
                    <input type="text" className='bg-white border-1 rounded h-10 capitalize pl-2 w-[100%]' placeholder='enter your email' />
                    <p className=' '>Password *</p>
                    <input type="text" className='bg-white border-1 rounded h-10 capitalize pl-2 w-[100%]' placeholder='enter your email' />
                </div>
                <div className="w-full flex items-center justify-between h-[10%]">
                    <input type="checkbox" className=' relative' name="" id="" />
                    <span className='absolute left-[35%]'>Remember me</span>
                    <a href="#" className='text-blue-600'>Lost your password?</a>
                </div>
                <div className="w-full flex items-center justify-center h-[20%]">
                    <button className='bg-[#634C9F] rounded-xl w-[100%] text-white capitalize  h-[60%]'>log in</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
import React from 'react'
import logo from '/Images/logo.png'
import { IoLocationSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            <nav className="navbar w-full capitalize font-medium text-sm h-[8vh] ">
                <div className="container flex mx-auto w-full h-full">
                    <div className="w-[15%] h-full flex items-center justify-center">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-[4%] h-full flex text-lg items-center justify-center">
                        <IoLocationSharp />
                    </div>
                    <div className="para flex justify-evenly flex-col w-[8%] h-full">
                        <p className='text-[#030712] font-normal'> <a href="">deliver to </a></p>
                        <p> <a href="">all </a></p>
                    </div>
                    <div className="h-full w-[53%]  flex items-center justify-center">
                        <div className="relative h-full w-[96%] items-center flex">
                            <input className="bg-[#f2f2f2] w-full rounded pl-10 h-[80%] placeholder-gray-400" type="text" name="text" placeholder="Search for products, categories or brands..." />
                            <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div className="w-[4%] h-full  flex text-lg items-center justify-center">
                        <FaUser />
                    </div>
                    <div className="para flex justify-evenly flex-col w-[8%] h-full">
                        <p className='text-[#030712] font-normal'> <a href="">sign in </a></p>
                        <p> <a href="">account </a></p>
                    </div>
                    <div className="w-[4%] h-ful flex font-extrabold text-lg items-center justify-center">
                        <FaShoppingCart />
                    </div>
                    <div className="w-[4%] h-ful flex font-extrabold text-lg items-center justify-center">
                        <CiHeart />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
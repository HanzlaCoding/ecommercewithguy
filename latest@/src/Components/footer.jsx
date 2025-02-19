import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
        <div className="w-full relative capitalize text-sm font-medium h-[100vh] bg-[#F3F4F6]">
            <div className="container flex w-full h-full flex-col mx-auto">
                <div className="w-full h-[30%] border-b-1 flex">
                    <div className="w-1/2 px-5 flex flex-col justify-center h-full">
                        <h3 className='mb-4 text-2xl'>Join our newsletter for £10 offs</h3>
                        <p>Register now to get latest updates on promotions &
                            coupons.Don’t worry, we not spam!</p>
                    </div>
                    <div className="w-1/2 flex justify-center h-full">
                        <input className="my-14 bg-[#fff] w-[70%] rounded-l-lg pl-10 h-[20%] placeholder-gray-400" type="text" name="text" placeholder="Search for products, categories or brands..." />
                        <CiMail className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                        <button type="submit" className='bg-[#634C9F] my-14 capitalize rounded-r-lg h-[20%] text-white px-7 '>send</button>
                        <p className=' absolute top-26 text-xs'>By subscribing you agree to our <a href="#" className='text-blue-700'> Terms & Conditions and Privacy & Cookies Policy. </a></p>
                    </div>
                </div>
                <div className="h-[50%] w-full flex border-b-1">
                    <div className="w-[25%] flex-col h-full flex">
                        <div className="h-[34%] flex justify-center flex-col w-full">
                            <h3 className='text-2xl'>Do You Need Help ?</h3>
                            <p className='text-[#6B7280] text-xs'>Autoseligen syr. Nek diarask fröbomba. Nör
                            antipol kynoda nynat. Pressa fåmoska.</p>
                        </div>
                        <div className="h-[34%] flex justify-center w-full">
                            <div className="w-[20%] h-full flex text-2xl items-center justify-center ">
                            <CiPhone />
                            </div>
                            <div className="flex flex-col-reverse justify-center w-[80%] h-full">
                            <h3 className='text-2xl'>0 800 300-353</h3>
                            <p className='text-[#6B7280] text-xs mt-4'>Monday-Friday: 08am-9pm</p>
                            </div>
                        </div>
                        <div className="h-[34%] flex justify-center w-full">
                            <div className="w-[20%] h-full flex text-xl items-center justify-center ">
                            <IoMailSharp />
                            </div>
                            <div className="flex flex-col-reverse justify-center w-[80%] h-full">
                            <h3 className='text-xl'>info@example.com</h3>
                            <p className='text-[#6B7280] text-xs'>Need help with your order?</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%] h-full border-b-1">
                        <ul className='w-full h-full text-[#4B5563] flex flex-col justify-evenly px-4'>
                            <li><h3 className='text-xl text-black'>Make Money with Us</h3></li>
                            <li><a href="#">Sell on Grogin</a></li>
                            <li><a href="#">Sell Your Services on Grogin</a></li>
                            <li><a href="#">Sell on Grogin Business</a></li>
                            <li><a href="#">Sell Your Apps on Grogin</a></li>
                            <li><a href="#">Become an Affilate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Sell-Publish with Us</a></li>
                            <li><a href="#">Become an Blowwe Vendor</a></li>
                        </ul>
                    </div>
                    <div className="w-[25%] h-full border-b-1">
                        <ul className='w-full h-full text-[#4B5563] flex flex-col justify-evenly px-4'>
                            <li><h3 className='text-xl text-black'>Let Us Help You</h3></li>
                            <li><a href="#">Sell on Grogin</a></li>
                            <li><a href="#">Sell Your Services on Grogin</a></li>
                            <li><a href="#">Sell on Grogin Business</a></li>
                            <li><a href="#">Sell Your Apps on Grogin</a></li>
                            <li><a href="#">Become an Affilate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Sell-Publish with Us</a></li>
                            <li><a href="#">Become an Blowwe Vendor</a></li>
                        </ul>
                    </div>
                    <div className="w-[25%] h-full border-b-1">
                        <ul className='w-full h-full text-[#4B5563] flex flex-col justify-evenly px-4'>
                            <li><h3 className='text-xl text-black'>Get to Know Us</h3></li>
                            <li><a href="#">Sell on Grogin</a></li>
                            <li><a href="#">Sell Your Services on Grogin</a></li>
                            <li><a href="#">Sell on Grogin Business</a></li>
                            <li><a href="#">Sell Your Apps on Grogin</a></li>
                            <li><a href="#">Become an Affilate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Sell-Publish with Us</a></li>
                            <li><a href="#">Become an Blowwe Vendor</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[20%] flex">
                    <div className="flex text-xs items-center justify-center w-[60%] h-full">
                        <p>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by BlackRise Themes.</p>
                    </div>
                    <div className="w-[40%] h-full flex flex-col">
                        <div className="w-full flex-col flex h-[60%]">
                            <p className=' w-full h-[30%] flex items-end justify-center'>Follow us on social media:</p>
                             <div className="flex justify-evenly items-end w-[60%] h-[70%] mx-auto">
                                <div className="size-10 flex items-center justify-center rounded bg-white">
                                <FaFacebookF className='size-5 rounded bg-white text-[#1877F2]' />
                                </div>
                                <div className="size-10 flex items-center justify-center rounded bg-white">
                                <BsTwitterX className='size-5 rounded bg-white text-[#000]' />
                                </div>
                                <div className="size-10 flex items-center justify-center rounded bg-white">
                                <FaLinkedinIn className='size-5 rounded bg-white text-[#0077B5]' />
                                </div>
                                <div className="size-10 flex items-center justify-center rounded bg-white">
                                <FaInstagram className='size-5 rounded bg-white text-[#FD1D1D]' />
                                </div>
                             </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-[40%]">
                            <ul className='flex size-full items-center justify-evenly underline '>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Order Tracking</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
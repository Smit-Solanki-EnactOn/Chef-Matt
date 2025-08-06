import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router-dom';

import Logo from "/images/logo.png"
import Logo2 from "/images/logo2.png"



const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    function openSidebar() {
        setIsOpen(!isOpen)

    }

    function closeSidebar() {
        setIsOpen(false)
    }
    return (
        <nav className='h-full flex items-center p-2 sm:p-4'>
            {!isOpen ? <div className='flex flex-col items-center h-full w-full  '>
                <button onClick={openSidebar} className='cursor-pointer'><GiHamburgerMenu className='text-white text-3xl sm:text-4xl md:text-5xl' /></button>

                <div className='flex items-center h-[80%] w-full justify-center'>
                    <img src={Logo} alt="logo" className='w-auto h-48 sm:h-64 md:h-80 lg:h-96 object-contain max-w-full' />
                </div>
            </div> :
                null
            }

            {/* Collapse */}

            {isOpen &&
                <div className='flex flex-col items-center h-full w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 '>
                    <button onClick={closeSidebar} className='cursor-pointer self-start transform translate-x-5'><ImCross className='text-white text-3xl sm:text-4xl md:text-5xl' /></button>
                    <div className='flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:w-80'>
                        <img src={Logo2} alt="logo" className='w-full h-auto object-contain' />
                    </div>
                    <ul className='flex flex-col items-start gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0'>
                        <li><Link to="/" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold' onClick={closeSidebar}>Home</Link></li>
                        <li><Link to="/products" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold' onClick={closeSidebar}>Products</Link></li>
                        <li><Link to="/meet-chef" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold'>Meet Chef Matt</Link></li>
                        <li><Link to="/faq" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold'>FAQ</Link></li>
                        <li><Link to="/footer" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold'>Connect With Us</Link></li>
                    </ul>

                    <div className='flex flex-col mt-auto mb-3 sm:mb-5 gap-2 px-2 sm:px-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                        <p className='text-sm sm:text-base md:text-lg text-white text-center sm:text-left'>TEXT SUPPORT 24/7 &nbsp; <span className='text-gold'>070-7782-9137</span></p>
                        <span className='w-full h-0.5 bg-white'></span>
                        <div className='flex flex-col sm:flex-row justify-around w-full gap-2 sm:gap-0'>
                            <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'><span><SlHandbag /></span>&nbsp;Cart</p>
                            <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'><span><SlHandbag /></span>&nbsp;Wishlist</p>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Sidebar
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "/images/logo.png"
import Logo2 from "/images/logo2.png"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const body = document.body
    
    function openSidebar() {
        setIsOpen(!isOpen)
        body.style.overflow = 'hidden'
    }

    function closeSidebar() {
        setIsOpen(false)
        body.style.overflow = 'auto'
    }

    const sidebarData = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        { name: 'Meet Chef Matt', link: '/meet-chef' },
        { name: 'FAQ', link: '/faq' },
        { name: 'Connect With Us', link: '/contact' },
    ]

    return (
        <motion.nav 
            className='flex items-center h-auto md:h-screen p-2 sm:p-4 bg-overlay-background border-0 md:border-r-6 border-gold shrink-0 max-w-full'
            initial={{ width: "auto" }}
            animate={{ width: isOpen ? "full" : "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {!isOpen ? (
                <motion.div 
                    className='flex md:flex-col items-center h-full w-full'
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <button onClick={openSidebar} className='cursor-pointer'>
                        <GiHamburgerMenu className='text-white text-3xl sm:text-4xl md:text-5xl' />
                    </button>

                    <div className='hidden md:flex h-80 w-auto my-auto'>
                        <img src={Logo} alt="logo" className='w-full h-full object-cover' />
                    </div>

                    <div className='flex md:hidden items-center h-10 w-auto justify-center mx-auto'>
                        <img src={Logo2} alt="logo" className='w-full h-full object-cover' />
                    </div>
                </motion.div>
            ) : (
                <AnimatePresence>
                    <motion.div 
                        className='flex flex-col items-center h-full w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <motion.button 
                            onClick={closeSidebar} 
                            className='cursor-pointer self-start transform translate-y-2 md:translate-x-5'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ImCross className='text-white text-2xl sm:text-3xl md:text-4xl' />
                        </motion.button>
                        
                        <motion.div 
                            className='flex items-center w-auto h-16 md:h-20'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={Logo2} alt="logo" className='w-full h-full object-cover' />
                        </motion.div>
                        
                        <motion.ul 
                            className='flex flex-col items-start px-2 sm:px-0 w-full'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            {sidebarData.map((item, index) => (
                                <motion.li 
                                    key={index} 
                                    className='w-full'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                                >
                                    <Link to={item.link} className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2'>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div 
                            className='flex flex-col mt-auto mb-3 sm:mb-5 gap-2 px-2 sm:px-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                        >
                            <p className='text-sm sm:text-base md:text-lg text-white text-center sm:text-left'>
                                TEXT SUPPORT 24/7 &nbsp; <span className='text-gold'>070-7782-9137</span>
                            </p>
                            <span className='w-full h-0.5 bg-white'></span>
                            <div className='flex flex-row justify-around w-full gap-2 sm:gap-0'>
                                <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'>
                                    <span><SlHandbag /></span>&nbsp;Cart
                                </p>
                                <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'>
                                    <span><SlHandbag /></span>&nbsp;Wishlist
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </motion.nav>
    )
}

export default Sidebar
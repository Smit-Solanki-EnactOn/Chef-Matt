import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { SlHandbag } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'
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


    const itemVariants = {
        open: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        close: { 
            opacity: 0, 
            y: 50,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    const containerVariants = {
        close: {
            // width: '8rem',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 0.6
            }
        },
        open: {
            // width: '24rem',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 0.6
            } 
        }
    }

    const contentVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        close: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1, 
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 150,
                damping: 30
            }
        }
    }

    // const listVariants = {
    //     open: { 
    //         transition: { 
    //             staggerChildren: 0.1, 
    //             delayChildren: 0.2 
    //         } 
    //     },
    //     close: {
    //         transition: {
    //             staggerChildren: 0.05,
    //             staggerDirection: -1
    //         }
    //     }
    // }



    return (
        <motion.nav
            className='flex items-center h-auto md:h-screen p-2 sm:p-4 bg-overlay-background border-0 md:border-r-6 border-gold shrink-0 max-w-full'
            variants={containerVariants}
            initial="close"
            animate={isOpen ? "open" : "close"}
            layout
        >
            
            {!isOpen ? <div className='flex md:flex-col items-center h-full w-full'>
                <button onClick={openSidebar} className='cursor-pointer '><GiHamburgerMenu className='text-white text-3xl sm:text-4xl md:text-5xl' /></button>

                <div className='hidden md:flex h-80 w-auto my-auto'>
                    <img src={Logo} alt="logo" className='w-full h-full object-cover' />
                </div>

                <div className='flex md:hidden items-center h-10 w-auto justify-center mx-auto'>
                    <img src={Logo2} alt="logo" className='w-full h-full object-cover' />
                </div>
            </div> :
                null
            }

            <AnimatePresence mode='wait'>
                {/* Sidebar Content */}
                {isOpen &&
                    <motion.div
                        className='flex flex-col items-center h-full w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10'
                        key="sidebar"
                        variants={contentVariants}
                        initial="close"
                        animate="open"
                        exit="close"
                    >
                        <motion.button variants={itemVariants} onClick={closeSidebar} className='cursor-pointer self-start transform translate-y-2 md:translate-x-5'><ImCross className='text-white text-2xl sm:text-3xl md:text-4xl' /></motion.button>
                        <motion.div
                            className='flex items-center w-auto h-16 md:h-20 '
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3 }}
                        >
                            <img src={Logo2} alt="logo" className='w-full h-full object-cover' />
                        </motion.div>
                        <motion.ul
                            className='flex flex-col items-start px-2 sm:px-0 w-full'
                            variants={{ open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
                        >
                            <motion.li
                                className='w-full'
                                variants={itemVariants}

                            >
                                <Link to="/" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2' onClick={closeSidebar}>Home</Link></motion.li>
                            <motion.li
                                className='w-full'
                                variants={itemVariants}

                            >
                                <Link to="/products" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2' onClick={closeSidebar}>Products</Link></motion.li>
                            <motion.li
                                className='w-full'
                                variants={itemVariants}

                            >
                                <Link to="/meet-chef" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2'>Meet Chef Matt</Link></motion.li>
                            <motion.li
                                className='w-full'
                                variants={itemVariants}

                            >
                                <Link to="/faq" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2'>FAQ</Link></motion.li>
                            <motion.li
                                className='w-full'
                                variants={itemVariants}

                            >
                                <Link to="/footer" className='text-lg sm:text-xl md:text-2xl text-white hover:text-gold w-full inline-flex my-2'>Connect With Us</Link></motion.li>
                        </motion.ul>

                        <motion.div variants={itemVariants} className='flex flex-col mt-auto mb-3 sm:mb-5 gap-2 px-2 sm:px-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                            <p className='text-sm sm:text-base md:text-lg text-white text-center sm:text-left'>TEXT SUPPORT 24/7 &nbsp; <span className='text-gold'>070-7782-9137</span></p>
                            <span className='w-full h-0.5 bg-white'></span>
                            <div className='flex flex-row justify-around w-full gap-2 sm:gap-0'>
                                <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'><span><SlHandbag /></span>&nbsp;Cart</p>
                                <p className='text-base sm:text-lg md:text-xl text-white flex items-center justify-center sm:justify-start hover:text-gold cursor-pointer'><span><SlHandbag /></span>&nbsp;Wishlist</p>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.nav>
    )
}

export default Sidebar
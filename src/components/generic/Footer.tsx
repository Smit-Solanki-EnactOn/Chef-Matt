import React from 'react'
import { FaBoxArchive, FaHeadphonesSimple, FaCircleCheck } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Logo2 from "/images/logo2.png"

const Footer = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 py-4">

                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-4'>
                    <div className='flex flex-col text-center lg:text-left'>
                        <p className='text-gold flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg md:text-xl lg:text-2xl'><span><FaBoxArchive /></span>Free Shipping Worldwide</p>
                        <p className='text-white mt-2 text-sm sm:text-base lg:ml-8'>Guaranteed Delivery</p>
                    </div>

                    <div className='flex flex-col text-center lg:text-left'>
                        <p className='text-gold flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg md:text-xl lg:text-2xl'><span><FaHeadphonesSimple /></span>24/7 CUSTOMER SERVICE</p>
                        <p className='text-white mt-2 text-sm sm:text-base lg:ml-8'>Text Us 24/7 at 070-7782-9137</p>
                    </div>

                    <div className='flex flex-col text-center lg:text-left'>
                        <p className='text-gold flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg md:text-xl lg:text-2xl'><span><FaCircleCheck /></span>QUALITY GUARANTEE!</p>
                        <p className='text-white mt-2 text-sm sm:text-base lg:ml-8'>Send Within 30 Days</p>
                    </div>
                </div>

                <div className='border-t-2 sm:border-t-3 md:border-t-4 border-gold'></div>

                <div className='flex flex-col items-center gap-4 sm:gap-5 md:gap-6'>
                    <div className='flex items-center w-full max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72 xl:max-w-80'>
                        <img src={Logo2} alt="logo" className='w-full h-auto object-contain' />
                    </div>

                    <div className='flex gap-3 sm:gap-4'>
                        <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaFacebook /></a>
                        <a href='https://www.twitter.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaTwitter /></a>
                        <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaInstagram /></a>
                        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaYoutube /></a>
                        <a href='https://www.pinterest.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaPinterest /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
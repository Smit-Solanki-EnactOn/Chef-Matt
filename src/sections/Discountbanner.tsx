import React from 'react'
import Button from '../components/core/Button'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'

const Discountbanner = () => {
    return (
        <section className='section-padding'>
            <div className="container mx-auto p-10  bg-white">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    style={{
                        "--swiper-pagination-color": "#000000",
                        "--swiper-pagination-bullet-size": "8px",
                        "--swiper-pagination-bullet-width": "8px",
                        "--swiper-pagination-bullet-height": "8px",
                        "--swiper-height": "100%"
                    } as React.CSSProperties}

                    modules={[Pagination]}
                    className='mySwiper flex items-center justify-center gap-10 w-full h-auto pb-8 sm:pb-10'
                >
                    <SwiperSlide>
                        <div className='flex flex-col sm:flex-row items-center justify-between py-4 gap-4 sm:gap-6 md:gap-4'>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-1 sm:order-1">
                                <img src="/images/Gourmet-Dried-Fruit-Pineapple.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>

                            <div className="flex flex-col place-items-center text-center order-2 sm:order-2 px-2 sm:px-4 md:px-2 lg:px-4">
                                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black uppercase'>Online Only</h2>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 md:mt-6 lg:mt-8'>GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Use code <strong>"Chef20"</strong></p>
                                <Button text={"Shop Now"} className='mt-3 sm:mt-4 md:mt-6 lg:mt-8 font-medium bg-transparent text-black border-2 border-black hover:bg-black hover:text-white text-xs sm:text-sm md:text-base px-4 py-2' />
                            </div>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-3 sm:order-3">
                                <img src="/images/Gourmet-Dried-Fruit-Mango.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex flex-col sm:flex-row items-center justify-between py-4 gap-4 sm:gap-6 md:gap-4'>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-1 sm:order-1">
                                <img src="/images/Gourmet-Dried-Fruit-Pineapple.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>

                            <div className="flex flex-col place-items-center text-center order-2 sm:order-2 px-2 sm:px-4 md:px-2 lg:px-4">
                                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black uppercase'>Online Only</h2>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 md:mt-6 lg:mt-8'>GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Use code <strong>"Chef20"</strong></p>
                                <Button text={"Shop Now"} className='mt-3 sm:mt-4 md:mt-6 lg:mt-8 font-medium bg-transparent text-black border-2 border-black hover:bg-black hover:text-white text-xs sm:text-sm md:text-base px-4 py-2' />
                            </div>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-3 sm:order-3">
                                <img src="/images/Gourmet-Dried-Fruit-Mango.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex flex-col sm:flex-row items-center justify-between py-4 gap-4 sm:gap-6 md:gap-4'>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-1 sm:order-1">
                                <img src="/images/Gourmet-Dried-Fruit-Pineapple.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>

                            <div className="flex flex-col place-items-center text-center order-2 sm:order-2 px-2 sm:px-4 md:px-2 lg:px-4">
                                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black uppercase'>Online Only</h2>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 md:mt-6 lg:mt-8'>GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Use code <strong>"Chef20"</strong></p>
                                <Button text={"Shop Now"} className='mt-3 sm:mt-4 md:mt-6 lg:mt-8 font-medium bg-transparent text-black border-2 border-black hover:bg-black hover:text-white text-xs sm:text-sm md:text-base px-4 py-2' />
                            </div>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-3 sm:order-3">
                                <img src="/images/Gourmet-Dried-Fruit-Mango.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex flex-col sm:flex-row items-center justify-between py-4 gap-4 sm:gap-6 md:gap-4'>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-1 sm:order-1">
                                <img src="/images/Gourmet-Dried-Fruit-Pineapple.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>

                            <div className="flex flex-col place-items-center text-center order-2 sm:order-2 px-2 sm:px-4 md:px-2 lg:px-4">
                                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black uppercase'>Online Only</h2>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 md:mt-6 lg:mt-8'>GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
                                <p className='text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Use code <strong>"Chef20"</strong></p>
                                <Button text={"Shop Now"} className='mt-3 sm:mt-4 md:mt-6 lg:mt-8 font-medium bg-transparent text-black border-2 border-black hover:bg-black hover:text-white text-xs sm:text-sm md:text-base px-4 py-2' />
                            </div>

                            <div className="aspect-square h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-3 sm:order-3">
                                <img src="/images/Gourmet-Dried-Fruit-Mango.png" alt="discount banner" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-6 md:gap-4">
                    <div className="aspect-square h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-1 md:order-1">
                        <img src="/images/Gourmet-Dried-Fruit-Pineapple.png" alt="discount banner" className='h-full w-full object-cover' />
                    </div>

                    <div className="flex flex-col place-items-center text-center order-2 md:order-2 px-4 md:px-2 lg:px-4">
                        <h2 className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-black uppercase'>Online Only</h2>
                        <p className='text-black text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 md:mt-8'>GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
                        <p className='text-black text-sm sm:text-base md:text-lg lg:text-xl'>Use code <strong>"Chef20"</strong></p>
                        <Button text={"Shop Now"} className='mt-4 sm:mt-6 md:mt-8 font-medium bg-transparent text-black border-2 border-black hover:bg-black hover:text-white' />
                    </div>

                    <div className="aspect-square h-40 md:h-48 lg:h-60 xl:h-72 overflow-hidden order-3 md:order-3">
                        <img src="/images/Gourmet-Dried-Fruit-Mango.png" alt="discount banner" className='h-full w-full object-cover' />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Discountbanner
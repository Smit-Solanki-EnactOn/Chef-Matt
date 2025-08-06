import React from 'react'
import LeafElement from "/images/leaf.png"
import LeftArrow from "/images/arrow-left.svg"
import RightArrow from "/images/arrow-right.svg"
import { productData } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'



import { FreeMode, Navigation, Pagination } from 'swiper/modules'

const ProductListSection = () => {
  return (
    <section className='section-padding'>
      {/* Container */}
      <div className="relative container mx-auto px-4">
        <div className='absolute top-0 left-1 -translate-y-58  z-0'>
          <img src={LeafElement} className='w-auto' />
        </div>
        {/* Wrapper */}
        <div className="py-4 flex flex-col gap-8 sm:gap-12 md:gap-16 z-10 relative">
          {/* Section Head */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-full sm:max-w-lg">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-gold uppercase'>Chef Matt Product</h2>
            <p className='text-white text-base sm:text-lg md:text-xl'>Shop Gourmet Chef Quality products from the Chef Matt brand.
              Chef it yourself and Thank us later.</p>
          </div>

          {/* Section Body */}
          {/* <div className='flex items-center justify-center gap-14'>

          {productData.map((product) => (
              <div className='flex flex-col gap-4 items-center' key={product.id}>
                <div className='aspect-square h-60 rounded-full overflow-hidden border-4 border-gold'>
                  <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                </div>
                <h3 className='text-gold text-xl text-center'>{product.name}</h3>
                <p className='flex gap-2 text-white text-xl text-center'><s>${product.actualPrice}</s> ${product.salePrice}</p>
              </div>
            ))}

          </div> */}


          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            pagination={false}
            navigation={{
              nextEl: '.button-next',
              prevEl: '.button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}

            modules={[FreeMode, Pagination, Navigation]}
            className='mySwiper flex items-center justify-center gap-10 w-full h-full'
          >
            {productData.map((product) => (
              <SwiperSlide key={product.id} className='flex flex-col justify-center place-items-center space-y-2 sm:space-y-3 md:space-y-4' style={{ width: 'max-content' }}>
                <div className='aspect-square h-40 sm:h-48 md:h-56 lg:h-60 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-gold'>
                  <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                </div>
                <h3 className='text-gold text-sm sm:text-base md:text-lg lg:text-xl text-center px-2'>{product.name}</h3>
                <p className='flex gap-2 text-white text-sm sm:text-base md:text-lg lg:text-xl center mb-0 mt-auto'><s>${product.actualPrice}</s> ${product.salePrice}</p>
              </SwiperSlide>
            ))}

            <button className="absolute left-0 sm:-left-2 md:-left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer button-prev" slot="button-prev">
              <img src={LeftArrow} alt="arrow-left" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15' />
            </button>

            <button className="absolute right-0 sm:-right-2 md:-right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer button-next" slot="button-next">
              <img src={RightArrow} alt="arrow-right" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15' />
            </button>
          </Swiper>


        </div>
      </div>
    </section>
  )
}

export default ProductListSection
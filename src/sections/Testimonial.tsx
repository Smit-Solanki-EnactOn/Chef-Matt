import StemElement from "/images/testimonial-stem.png"
import { testimonialData } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'


import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

const Testimonial = () => {
  // const [sliderIndex, setSliderIndex] = React.useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState();

  console.log(activeSlideIndex)


  return (
    <section className='section-padding'>
      {/* Container */}
      <div className="relative container mx-auto px-4">
        <div className='absolute top-0 right-0 -translate-y-32 sm:-translate-y-44 md:-translate-y-58 z-0'>
          <img src={StemElement} className='w-16 sm:w-20 md:w-24 lg:w-auto' />
        </div>
        {/* Wrapper */}
        <div className="py-4 flex flex-col gap-8 sm:gap-12 md:gap-16 z-10 relative">
          {/* Section Head */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-full sm:max-w-lg">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-gold uppercase'>Chef Matt ṭestimonial</h2>
            <p className='text-white text-base sm:text-lg md:text-xl'>Shop Gourmet Chef Quality ṭestimonials from the Chef Matt brand. Chef it yourself and Thank us later.</p>
          </div>

          {/* Section Body */}

          <Swiper
            onActiveIndexChange={(swiper) => {
              setActiveSlideIndex(swiper.realIndex)
            }}
            // slidesPerView={5}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              scale: 1,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            // pagination={{
            //   clickable: true
            // }}
            navigation={false}
            breakpoints={{

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}

            modules={[EffectCoverflow, Pagination, Navigation]}
            // style={{
            //   "--swiper-pagination-horizontal-offset": "display: none;",
            // } as React.CSSProperties}
            className='mySwiper flex items-center justify-center gap-10 w-full h-full '
          >
            {testimonialData.map((ṭestimonial) => (
              <SwiperSlide key={ṭestimonial.id} className='flex flex-col justify-center place-items-center space-y-2 sm:space-y-3 md:space-y-4' style={{ width: 'max-content' }}>
                <div className='aspect-square h-32 sm:h-36 md:h-40 lg:h-48 rounded-full overflow-hidden '>
                  <img src={ṭestimonial.userImage} alt={ṭestimonial.userName} className='h-full w-full object-cover' />
                </div>
                
                {activeSlideIndex === testimonialData.indexOf(ṭestimonial) && (
                  <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
                    <h3 className='text-gold text-sm sm:text-base md:text-lg lg:text-xl text-center px-2'>{ṭestimonial.userName}</h3>
                    <p className='flex gap-2 text-white text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-48 sm:max-w-56 md:max-w-64'>"{ṭestimonial.message}"</p>
                  </div>
                )}

              </SwiperSlide>

            ))}
          </Swiper>


        </div>
      </div>
    </section>
  )
}

export default Testimonial
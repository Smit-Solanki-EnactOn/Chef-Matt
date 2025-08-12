import Button from '../components/core/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'



const HeroSection = () => {
  const heroImages = [
    "/images/HeroImage1.png",
    "/images/HeroImage2.png",
    "/images/HeroImage3.png",
    "/images/HeroImage4.png"
  ]

  return (
    <section className='relative' id='home' >
      {/* Background Image */}
      <div className='z-0'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          freeMode={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          effect='fade'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          
          modules={[Pagination, Autoplay, EffectFade]}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-width": "10px",
            "--swiper-pagination-bullet-height": "10px"
          } as React.CSSProperties}
          className="mySwiper w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:max-h-[900px] 2xl:h-[900px]"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Hero slide ${index + 1}`}
                  className='h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      <div className='absolute bottom-8 sm:bottom-16 md:bottom-24 lg:bottom-32 xl:bottom-40 left-1/2 transform -translate-x-1/2 z-1 px-4 sm:px-0 flex flex-col items-center gap-10'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl  text-white text-center font-outline sm:font-outline-gold flex flex-col lg:leading-20 xl:leading-24 text-shadow-lg'>
            Chef Quality
            <span className='text-gold'>Products + Experiences</span>  
            To your home
          </h1>
        <Button text='Shop Now' className="w-fit md:w-md font-semibold border-2 bg-gold text-white border-transparent hover:bg-white hover:text-gold text-sm sm:text-base md:text-lg whitespace-nowrap" />

        <Button text='Meet Chef Matt' className="wifit md:w-md font-semibold border-2 border-white text-white hover:bg-white hover:text-gold text-sm sm:text-base md:text-lg whitespace-nowrap" />
      </div>

    </section>
  )
}

export default HeroSection
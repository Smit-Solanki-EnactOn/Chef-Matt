const PromotionSection = () => {

  const GridBanner = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 ">
        <div className="aspect-auto h-auto w-full">
          <img src="/images/promotion-1.png" alt="banner 1" className='h-full w-full object-cover' />
        </div>
        <div className="aspect-auto h-auto w-full">
          <img src="/images/promotion-2.png" alt="banner 2" className='h-full w-full object-cover' />
        </div>
        <div className="aspect-auto h-auto w-full">
          <img src="/images/promotion-3.png" alt="banner 3" className='h-full w-full object-cover' />
        </div>
        <div className="aspect-auto h-auto w-full">
          <img src="/images/promotion-4.png" alt="banner 4" className='h-full w-full object-cover' />
        </div>
      </div>
    )
  }

  const EmailPromotion = () => {
    return (
      <>
        {/* Background Image */}
        < div className='absolute inset-0 h-full w-full z-0' >
          <img src="/images/promotion-background.png" alt="promotion background" className='h-full w-full object-cover' />
        </div >

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <h2 className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium border-b-2 border-white w-fit'>Sign Up Special Promotion</h2>
          <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl'>Get exclusive deals you won't find anywhere else straight to your inbox!</p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl'>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='w-full sm:flex-1 p-2 sm:p-3 text-sm sm:text-base text-gray-300 border-2 border-gray-300 bg-transparent placeholder:text-gray-300 focus:outline-none focus:border-white' 
            />
            <button className="bg-gold text-white hover:bg-white hover:text-gold px-6 sm:px-8 md:px-12 py-2 sm:py-3 text-sm sm:text-base font-medium transition duration-300 ease-in-out cursor-pointer whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </>
    )
  }

  return (

    <section>
      <div className="container mx-auto">
        {/* Grid Banner */}
        <GridBanner />

        <div className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
          <EmailPromotion />
        </div>
      </div>
    </section>

  )
}

export default PromotionSection
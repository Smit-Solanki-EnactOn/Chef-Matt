import React from 'react'
import HeroSection from '../sections/HeroSection'
import ProductListSection from '../sections/ProductListSection'
import Discountbanner from '../sections/Discountbanner'
import Testimonial from '../sections/Testimonial'
import PromotionSection from '../sections/PromotionSection'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <ProductListSection />
        <Discountbanner />
        <Testimonial />
        <PromotionSection />
    </>
  )
}

export default HomePage
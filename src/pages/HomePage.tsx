import React from 'react'
import HeroSection from '../sections/HeroSection'
import ProductListSection from '../sections/ProductListSection'
import Discountbanner from '../sections/Discountbanner'
import Testimonial from '../sections/Testimonial'
import { motion } from 'framer-motion'
import { EaseInOut } from '../animation/EaseInOut'
// import PromotionSection from '../sections/PromotionSection'

const HomePage = () => {
  return (
    <motion.section
      variants={EaseInOut}
      initial='initial'
      animate='animate'
      exit='initial'
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <HeroSection />
      <ProductListSection />
      <Discountbanner />
      <Testimonial />
    </motion.section>
  )
}

export default HomePage
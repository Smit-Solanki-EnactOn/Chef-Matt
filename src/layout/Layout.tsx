import React from 'react'
import Sidebar from '../components/generic/Sidebar'
import Footer from '../components/generic/Footer'
import PromotionSection from '../sections/PromotionSection'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
  
  
  return (
    <>
      {/* Desktop sidebar */}
      <aside className='sidebar hidden md:block '>
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      <div className='md:hidden fixed z-50 top-0 left-0 right-0'>
        <Sidebar /> 
      </div>

      <main className='flex-1'>
        <ScrollRestoration />
        <Outlet />
        <PromotionSection />
      </main>

      <footer className='mb-0 mt-auto'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
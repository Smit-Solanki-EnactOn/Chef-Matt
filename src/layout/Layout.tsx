import React from 'react'
import Sidebar from '../components/generic/Sidebar'
import Footer from '../components/generic/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
 
  
  return (
    <>
      {/* Desktop sidebar */}
      <aside className='sidebar hidden md:block'>
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      <div className='md:hidden'>
        <Sidebar />
      </div>

      <main className='flex-1'>
        <Outlet />
      </main>

      <footer className='mb-0 mt-auto'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
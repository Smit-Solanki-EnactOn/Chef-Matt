import React from 'react'
import Sidebar from '../components/generic/Sidebar'
import Footer from '../components/generic/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
 
  
  return (
    <>
      <aside className='sidebar'>
        <Sidebar />
      </aside>

      <main>
        <Outlet />
      </main>

      <footer className='mb-0 mt-auto'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
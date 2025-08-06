import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />
        },
      ]
    }
  ])

  return (

    <RouterProvider router={router} />
    )
}

export default App


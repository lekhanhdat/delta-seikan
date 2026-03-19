import { createBrowserRouter, Navigate } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/homePage'
import HomePageEN from '../pages/en/homePage'
import ProductPage from '../pages/productPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: '/products',
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
  {
    path: '/en',
    element: (
      <MainLayout>
        <HomePageEN />
      </MainLayout>
    ),
  },
  {
    path: '/en/products',
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
])

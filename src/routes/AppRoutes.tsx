import { createBrowserRouter, Navigate } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import CareerPage from '../pages/career/CareerPage'
import CertificatePage from '../pages/certificate/CertificatePage'
import ContactPage from '../pages/contact/ContactPage'
import HomePage from '../pages/home/HomePage'
import NewsPage from '../pages/news/NewsPage'
import HomePageEN from '../pages/en/HomePage'
import ProductPage from '../pages/products/ProductPage'

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
    path: '/certificates',
    element: (
      <MainLayout>
        <CertificatePage />
      </MainLayout>
    ),
  },
  {
    path: '/careers',
    element: (
      <MainLayout>
        <CareerPage />
      </MainLayout>
    ),
  },
  {
    path: '/news',
    element: (
      <MainLayout>
        <NewsPage />
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <ContactPage />
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

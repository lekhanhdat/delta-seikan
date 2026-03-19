import type { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import './MainLayout.css'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout-root flex z-0 flex-col min-h-screen">
      <Header/>
      <main className="layout-main flex-grow min-h-screen w-full pt-[72px] md:pt-[84px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

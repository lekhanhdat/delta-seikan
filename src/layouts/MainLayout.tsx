import type { ReactNode } from "react";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout-root flex flex-col min-h-screen">
      <Header />
      <main className="layout-main flex-grow w-full pt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

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

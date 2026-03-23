import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "@/components/layout/Header/Header";
import "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const routeLang = pathname.startsWith("/en") ? "en" : "vi";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    if (i18n.language !== routeLang) {
      i18n.changeLanguage(routeLang);
    }
    localStorage.setItem("lang", routeLang);
  }, [i18n, routeLang]);

  return (
    <div className="layout-root flex flex-col min-h-screen">
      <Header />
      <main className="layout-main flex-grow w-full pt-[var(--header-height)]">
        <div className="page-sections">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;

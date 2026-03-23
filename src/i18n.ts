import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// EN
import enHeader from "./locales/en/header.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enProduct from "./locales/en/product.json";
import enCertificate from "./locales/en/certificate.json";
import enCareer from "./locales/en/career.json";
import enNews from "./locales/en/news.json";
import enContact from "./locales/en/contact.json";

// VI
import viHeader from "./locales/vi/header.json";
import viFooter from "./locales/vi/footer.json";
import viHome from "./locales/vi/home.json";
import viProduct from "./locales/vi/product.json";
import viCertificate from "./locales/vi/certificate.json";
import viCareer from "./locales/vi/career.json";
import viNews from "./locales/vi/news.json";
import viContact from "./locales/vi/contact.json";

// lấy ngôn ngữ đã lưu
const savedLang = localStorage.getItem("lang") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: enHeader,
      footer: enFooter,
      home: enHome,
      product: enProduct,
      certificate: enCertificate,
      career: enCareer,
      news: enNews,
      contact: enContact,
    },
    vi: {
      header: viHeader,
      footer: viFooter,
      home: viHome,
      product: viProduct,
      certificate: viCertificate,
      career: viCareer,
      news: viNews,
      contact: viContact,
    },
  },

  lng: savedLang,
  fallbackLng: "en",

  ns: ["header", "footer", "contact", "home", "product", "certificate", "career", "news"],     // 👈 namespace
  defaultNS: "header",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
"# delta-seikan" 
src/
├── components/                  # dùng chung toàn app
│   ├── common/
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
│
├── layouts/
│   ├── MainLayout.tsx
│   └── MainLayout.css
│
├── pages/
│
│   ├── home/
│   │   ├── HomePage.tsx
│   │   ├── HomePage.css
│   │   └── components/
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   └── Hero.css
│   │       ├── AboutSection/
│   │       ├── CapabilitySection/
│   │       ├── FeatureCards/
│   │       └── TimelineSection/
│
│   ├── products/
│   │   ├── ProductPage.tsx
│   │   ├── ProductPage.css
│   │   └── components/
│   │       ├── PageHero/
│   │       │   ├── PageHero.tsx
│   │       │   └── PageHero.css
│   │       ├── ProductSection/
│   │       │   ├── ProductSection.tsx
│   │       │   └── ProductSection.css
│   │       ├── ServiceSection/
│   │       │   ├── ServiceSection.tsx
│   │       │   └── ServiceSection.css
│   │       └── CategoryTabs/
│
│   ├── news/
│   │   ├── NewsPage.tsx
│   │   ├── NewsPage.css
│   │   └── components/
│
│   ├── contact/
│   │   ├── ContactPage.tsx
│   │   ├── ContactPage.css
│   │   └── components/
│
│   ├── career/
│   │   ├── CareerPage.tsx
│   │   ├── CareerPage.css
│   │   └── components/
│
│   ├── certificate/
│   │   ├── CertificatePage.tsx
│   │   ├── CertificatePage.css
│   │   └── components/
│
│   ├── en/                     # bản tiếng Anh
│   │   ├── home/
│   │   │   ├── HomePage.tsx
│   │   │   └── components/
│   │   ├── products/
│   │   ├── news/
│   │   └── ...
│
├── routes/
└── styles/
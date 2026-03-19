import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiGlobe } from 'react-icons/fi'
import { HiOutlineFlag } from 'react-icons/hi2'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname
  const lang = pathname.startsWith('/en') ? 'en' : 'vi'

  const [active, setActive] = useState(0)
  const [style, setStyle] = useState({ left: 0, width: 0 })
  const [openLang, setOpenLang] = useState(false)

  const refs = useRef<(HTMLDivElement | null)[]>([])
  const langRef = useRef<HTMLDivElement | null>(null)

  const menu = {
    vi: [
      { label: 'Giới thiệu', path: '/' },
      { label: 'Sản phẩm', path: '/products' },
      { label: 'Chứng nhận', path: '/' },
      { label: 'Tuyển dụng', path: '/' },
      { label: 'Tin tức', path: '/' },
      { label: 'Liên hệ', path: '/' },
    ],
    en: [
      { label: 'About', path: '/en' },
      { label: 'Products', path: '/en/products' },
      { label: 'Certificates', path: '/en' },
      { label: 'Careers', path: '/en' },
      { label: 'News', path: '/en' },
      { label: 'Contact', path: '/en' },
    ],
  }

  const menuItems = menu[lang]

  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.path === pathname)
    setActive(currentIndex >= 0 ? currentIndex : 0)
  }, [menuItems, pathname])

  useEffect(() => {
    const el = refs.current[active]
    if (el) {
      setStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [active, pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setOpenLang(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const getSwitchLink = (targetLang: 'vi' | 'en') => {
    if (targetLang === 'en') {
      if (pathname.startsWith('/en')) return pathname
      return pathname === '/' ? '/en' : `/en${pathname}`
    }
    return pathname.replace(/^\/en/, '') || '/'
  }

  const handleChangeLanguage = (targetLang: 'vi' | 'en') => {
    navigate(getSwitchLink(targetLang))
    setOpenLang(false)
  }

  return (
    <header className="sticky top-0 bg-[#f6f7fb] border-b z-50">
      <div className="w-full px-10 py-4 flex items-center justify-between">
        <a
          href={lang === 'en' ? '/en' : '/'}
          onClick={(e) => {
            e.preventDefault()
            navigate(lang === 'en' ? '/en' : '/')
          }}
          className="font-bold text-[#1e3a8a] text-lg"
        >
          DELTA SEIKAN
        </a>

        <nav className="relative flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              ref={(el) => {
                if (el) refs.current[index] = el
              }}
              onClick={() => {
                setActive(index)
                navigate(item.path)
              }}
              className={`cursor-pointer font-medium transition
                ${active === index ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              {item.label}
            </div>
          ))}

          <span
            className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
            style={{
              left: style.left,
              width: style.width,
            }}
          />
        </nav>

        <div className="flex items-center gap-6">
          <div ref={langRef} className="relative">
            <FiGlobe
              onClick={() => setOpenLang(!openLang)}
              className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer transition"
            />

            {openLang && (
              <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleChangeLanguage('vi')}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    lang === 'vi' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  🇻🇳 Tiếng Việt
                </button>

                <button
                  type="button"
                  onClick={() => handleChangeLanguage('en')}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    lang === 'en' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            )}
          </div>
          <HiOutlineFlag className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer transition" />

          <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            {lang === 'en' ? 'Contact us' : 'Liên hệ tư vấn'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
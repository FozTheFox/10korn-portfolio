'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from '@/i18n/routing'
import { RiSunLine , RiMoonClearLine  , RiGlobalLine } from "react-icons/ri";

export default function Header() {
  const t = useTranslations('Header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // รอให้ Client โหลดเสร็จก่อนค่อยอนุญาตให้แสดงผล (ตัวแก้ Hydration Error)
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'th' : 'en'
    router.replace(pathname, { locale: nextLocale, scroll: false })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">
          {t('title')}<span className="text-blue-600 dark:text-blue-500">.dev</span>
        </div>
        <div className="flex gap-6 items-center">
          <nav className="hidden md:flex gap-6">
            <a href="#aboutme" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('home')}</a>
            <a href="#education" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('education')}</a>
            <a href="#experience" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('experience')}</a>
            <a href="#projects" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('projects')}</a>
            <a href="#skills" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('skills')}</a>
            <a href="#contact" className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('contact')}</a>
          </nav>

          <div className=""> | </div>

          <div className="flex items-center gap-1">
            <button onClick={toggleLanguage} className="uppercase font-bold w-17 h-10 flex items-center justify-center rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
              <div className="flex items-center gap-1">
                <RiGlobalLine className="w-5 h-5 text-gray-900 dark:text-white  group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-300" />
                {locale === 'en' ? 'TH' : 'EN'}
              </div>
            </button>

            {/* แก้ไขปุ่มนี้! ใส่เงื่อนไข mounted เช็กก่อนโชว์ไอคอน */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
              {mounted ? (
                theme === 'dark' ? (
                  // ไอคอนพระอาทิตย์: ให้เป็นสีเหลืองอ่อนๆ ตอนเป็นโหมดมืด และกระพริบแสงตอน Hover
                  <RiSunLine className="w-5 h-5 text-yellow-300 group-hover:text-yellow-400 group-hover:rotate-90 transition-all duration-300" />
                ) : (
                  // ไอคอนพระจันทร์: ให้เป็นสีเทาเข้มในโหมดสว่าง และเอียงนิดๆ ตอน Hover
                  <RiMoonClearLine  className="w-5 h-5 text-blue-700 group-hover:text-blue-900 group-hover:-rotate-12 transition-all duration-300" />
                )
              ) : (
                // ใส่กล่องว่างๆ ขนาดเท่ากันไว้กัน Layout ขยับตอนโหลด
                <div className="w-5 h-5 opacity-0" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
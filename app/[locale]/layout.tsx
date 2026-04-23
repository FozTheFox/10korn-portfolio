import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Providers } from "../providers";
import Header from "../components/Header";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const promptFont = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-prompt", // ตั้งชื่อตัวแปรให้ Tailwind เอาไปใช้ต่อ
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://10Korn.vercel.app'), // <-- ใส่แบบนี้ไปก่อน
  // 1. ข้อมูลพื้นฐานสำหรับ Google Search
  title: "10Korn.dev - Portfolio",
  description: 'Portfolio of Sippagon Phanlaor (10Korn), a Full-Stack Developer specializing in React, Next.js, and scalable web applications.',
  keywords: ['Sippagon Phanlaor', 'สิปปกรณ์ พันธ์ละออ', 'Full-Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Portfolio', 'Web Developer', 'golang', 'nodejs', 'typescript', 'javascript', 'postgreSQL'],
  authors: [{ name: 'Sippagon Phanlaor' }],
  
  // 2. Open Graph (ไม้ตายลับเวลาแชร์ลิงก์ลง Facebook, LinkedIn, Discord)
  openGraph: {
    title: '10Korn.dev - Portfolio',
    description: 'Explore my projects, skills, and experience in web development.',
    siteName: '10Korn.dev - Portfolio',
    images: [
      {
        // รูปพรีวิวเว็บขนาด 1200x630 (ต้องไปทำรูปมาใส่ในโฟลเดอร์ public)
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Sippagon Phanlaor Portfolio',
      },
    ],
    locale: 'en_US', // หรือ en_US
    type: 'website',
  },

  // 3. Twitter Card (สำหรับแชร์ลง Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: '10Korn.dev - Portfolio',
    description: 'Explore my projects, skills, and experience in web development.',
    images: ['/og-image.png'],
  },
};

export default async function RootLayout({ children, params }: { children: React.ReactNode,params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning className={`${promptFont.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

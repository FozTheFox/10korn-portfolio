import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // กำหนดภาษาทั้งหมดที่เว็บไซต์เรารองรับ
  locales: ['en', 'th'],
  
  // กำหนดภาษาเริ่มต้น (ถ้าผู้ใช้พิมพ์ URL เข้ามาเฉยๆ ไม่มี /th หรือ /en)
  defaultLocale: 'en'
});

// สร้าง Hooks พิเศษสำหรับจัดการ URL ที่มีเรื่องภาษามาเกี่ยวข้อง
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
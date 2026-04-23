import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // ดักจับทุก URL ยกเว้นพวกไฟล์ระบบ รูปภาพ หรือ api
  matcher: ['/', '/(th|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
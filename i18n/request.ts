import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // ดึงค่า locale ที่ผู้ใช้ request เข้ามา (TS จะมองว่าอาจเป็น string หรือ undefined)
  const requestedLocale = await requestLocale;
 
  // ตรวจสอบว่ามีค่า และเป็นภาษาที่เรากำหนดไว้ใน routing.locales หรือไม่
  const locale = requestedLocale && routing.locales.includes(requestedLocale as any) 
    ? requestedLocale 
    : routing.defaultLocale;
 
  return {
    locale, // ตอนนี้ TS มั่นใจ 100% แล้วว่ามันคือ string แน่นอน
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
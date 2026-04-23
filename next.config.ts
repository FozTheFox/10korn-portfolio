import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// ระบุที่อยู่ของไฟล์ request.ts ที่เราสร้างไว้
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  // เปิดใช้งาน Security Headers
  async headers() {
    return [
      {
        // บังคับใช้กับทุกๆ path ในเว็บไซต์ (/(.*))
        source: '/(.*)',
        headers: [
          {
            // ป้องกัน Clickjacking: ไม่ให้เว็บผีดูดเว็บเราไปแปะใน iframe
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // ป้องกัน MIME Sniffing: บังคับให้เบราว์เซอร์เชื่อชนิดไฟล์ที่เราส่งให้เท่านั้น
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // ควบคุมการส่งข้อมูล Referrer ว่าคนดูมาจากไหน (ปกป้องความเป็นส่วนตัว)
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // ป้องกันการแอบเปิดกล้อง/ไมค์/ตำแหน่งที่ตั้ง ผ่านเว็บของเรา
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            // บังคับให้เบราว์เซอร์ใช้ HTTPS เสมอ (ป้องกันการดักจับข้อมูล)
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }
        ],
      },
    ];
  },
};

// ห่อ Config ด้วย withNextIntl
export default withNextIntl(nextConfig);
// app/page.tsx
import {redirect} from 'next/navigation';

export default function RootPage() {
  // เมื่อเข้าหน้าแรกสุด (/) ให้ส่งไปที่ภาษาเริ่มต้น (en) ทันที
  redirect('/en');
}
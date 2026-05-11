// components/Modal.tsx
'use client'

import { useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null;

  return (
    <div 
      // แก้ z-100 เป็น z-[100] (Tailwind ต้องมี [] ถ้าเป็นค่า custom)
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in cursor-pointer"
      onClick={onClose} 
    >
      <div 
        // 📱 2. เพิ่ม max-h-[90vh] และ flex flex-col เพื่อจำกัดความสูงและจัด Layout
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 md:p-8 animate-scale-up cursor-default"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* 📌 3. ส่วน Header: ใส่ shrink-0 เพื่อไม่ให้ส่วนหัวมันหดตัวตอนรูปข้างในยาวเกินไป */}
        <div className="flex items-center justify-between mb-6 shrink-0">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>

        {/* 🖱️ 4. ส่วนเนื้อหา (Children): ใส่ overflow-y-auto ทำให้เลื่อนดูลูกกลิ้งในนี้ได้ */}
        {/* เพิ่ม pr-2 (padding-right) เพื่อไม่ให้ Scrollbar ไปทับเนื้อหา */}
        <div className="overflow-y-auto custom-scrollbar pr-2 pb-2">
          {children}
        </div>
      </div>
    </div>
  )
}
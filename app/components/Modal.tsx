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
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in cursor-pointer"
      // 1. เพิ่มการปิดเมื่อคลิกฉากหลัง
      onClick={onClose} 
    >
      <div 
        // 2. ปรับความกว้างที่นี่ (เช่น max-w-4xl) และเปลี่ยน cursor กลับเป็นปกติ
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 md:p-8 animate-scale-up cursor-default"
        // 3. สำคัญมาก: หยุดการส่งต่อ Event เพื่อไม่ให้ปิดเมื่อคลิกข้างในกล่อง
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}
'use client'

import Modal from './Modal'

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Let's Connect! 🚀">
      {/* เนื้อหาฟอร์มติดต่อ หรือโซเชียลมีเดียของคุณ */}
      <div className="flex flex-col gap-4">
        <p className="text-slate-600 dark:text-slate-400">
          Interested in working together? Send me a message or connect on LinkedIn.
        </p>
        
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
        />
        
        <button 
          onClick={onClose} // ปิด popup เมื่อกดส่ง
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors mt-2"
        >
          Send Message
        </button>
      </div>
    </Modal>
  )
}
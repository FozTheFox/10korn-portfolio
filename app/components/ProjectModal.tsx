'use client'

import { useState, useEffect } from 'react'
import Modal from './Modal'
import { useTranslations } from 'next-intl'

interface Project {
  id: string;
  images: string[]; // เปลี่ยนให้รับเป็น Array ของ string
  techStack: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const t = useTranslations('Projects');
  
  // สร้าง State เพื่อเก็บว่าตอนนี้โชว์รูปที่เท่าไหร่ (เริ่มต้นที่รูปแรก คือ index 0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // สำคัญ: รีเซ็ตกลับไปรูปแรกเสมอเวลาเปิด Popup โปรเจกต์ใหม่
  useEffect(() => {
    if (project) setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const projectImages = project.images || [];
  
  return (
    <Modal 
      isOpen={!!project} 
      onClose={onClose} 
      title={t(`items.${project.id}.title`)}
    >
      <div className="flex flex-col gap-6">
        
        {/* --- 🖼️ โซนแสดงรูปภาพ --- */}
        <div className="flex flex-col gap-3">
          
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner flex items-center justify-center">
            {/* 🛡️ เช็กว่ามีรูปภาพใน Array หรือไม่ */}
            {projectImages.length > 0 ? (
              <img 
                src={projectImages[currentImageIndex]} 
                alt={`${project.id} preview`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              // 🛡️ ถ้าไม่มีรูปภาพ ให้แสดงข้อความนี้แทนเว็บพัง
              <span className="text-slate-400 dark:text-slate-500 font-medium">
                No image available
              </span>
            )}
          </div>

          {/* ... ส่วน Thumbnail (เปลี่ยน project.images เป็น projectImages ให้หมด) ... */}
          {projectImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
              {projectImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`
                    shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200
                    ${currentImageIndex === index 
                      ? 'border-blue-500 opacity-100 scale-105 shadow-md' // รูปที่เลือกอยู่
                      : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105' // รูปอื่นๆ
                    }
                  `}
                >
                  <img src={img} alt={`thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- 📝 โซนรายละเอียด --- */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {t(`items.${project.id}.description`)}
        </p>
      </div>
    </Modal>
  )
}
'use client'

// 1. เพิ่ม useRef เข้ามาใน import
import { useState, useEffect, useRef } from 'react'
import Modal from './Modal'
import { useTranslations } from 'next-intl'

interface Project {
  id: string;
  images: string[];
  techStack: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const t = useTranslations('Projects');
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 2. สร้าง Ref สำหรับจับกล่อง Thumbnail
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) setCurrentImageIndex(0);
  }, [project]);

  // 🎯 3. เพิ่ม useEffect เพื่อแปลงการเลื่อนแนวตั้ง (Y) เป็นแนวนอน (X)
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // ตรวจสอบว่าถ้ามีการเลื่อนลูกกลิ้งเมาส์
      if (e.deltaY !== 0) {
        e.preventDefault(); // 🛑 หยุดไม่ให้หน้า Modal หลักเลื่อนลง
        container.scrollLeft += e.deltaY; // 👉 สั่งให้กล่อง Thumbnail เลื่อนไปด้านข้างแทน
      }
    };

    // ต้องใช้ { passive: false } เพื่อให้ e.preventDefault() ทำงานได้ในเบราว์เซอร์ยุคใหม่
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [project]); // ให้ทำงานใหม่ทุกครั้งที่เปลี่ยนโปรเจกต์

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
            {projectImages.length > 0 ? (
              <img 
                src={projectImages[currentImageIndex]} 
                alt={`${project.id} preview`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <span className="text-slate-400 dark:text-slate-500 font-medium">
                No image available
              </span>
            )}
          </div>

          {/* 🎯 4. ใส่ ref ให้กับกล่อง Thumbnail */}
          {projectImages.length > 1 && (
            <div 
              ref={thumbnailContainerRef}
              className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 custom-scrollbar"
            >
              {projectImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`
                    shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200
                    ${currentImageIndex === index 
                      ? 'border-blue-500 opacity-100 scale-105 shadow-md' 
                      : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105 cursor-pointer'
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
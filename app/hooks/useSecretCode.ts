import { useState, useEffect } from 'react';

export function useSecretCode(secretCode: string[], callback: () => void) {
  const [buffer, setBuffer] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 🛑 ดักไม่ให้หน้าเว็บเลื่อนตอนกดลูกศร (และ Spacebar)
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault(); 
      }

      // 🎯 ไฮไลต์จุดแก้: เปลี่ยนจาก e.key เป็น e.code
      const key = e.code.toLowerCase(); 

      setBuffer((prevBuffer) => {
        return [...prevBuffer, key].slice(-secretCode.length);
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secretCode.length]);

  useEffect(() => {
    if (buffer.length > 0 && buffer.join('') === secretCode.join('')) {
      callback();
      setBuffer([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buffer]); 
}
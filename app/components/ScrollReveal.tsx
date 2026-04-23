'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// เพิ่ม props 'direction' เพื่อเลือกทิศทางได้
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({ children, direction = 'up' }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // กำหนดค่าเริ่มต้นตามทิศทางที่เลือก
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? 50 : direction === 'left' ? -50 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
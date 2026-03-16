import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button');
        
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="pointer-events-none fixed inset-0 z-[100]"
    >
      <motion.div
        className="absolute w-3 h-3 bg-indigo-500 rounded-full mix-blend-screen"
        animate={{ 
          x: mousePosition.x - 6, 
          y: mousePosition.y - 6, 
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? '#818cf8' : '#6366f1'
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
      />
      <motion.div
        className="absolute w-10 h-10 border border-indigo-400/40 rounded-full"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20, 
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(129, 140, 248, 0.8)' : 'rgba(99, 102, 241, 0.4)'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.8 }}
      />
    </motion.div>
  );
};

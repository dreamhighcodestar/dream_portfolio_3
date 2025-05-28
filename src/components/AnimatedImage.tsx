
import React, { useRef, useEffect } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className }) => {
  const imgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const elem = imgRef.current;
    if (!elem) return;
    
    let animationFrameId: number;
    let rect: DOMRect;
    
    // Initialize values
    let tiltX = 0;
    let tiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!rect) rect = elem.getBoundingClientRect();
      
      // Calculate mouse position relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate tilt based on mouse position
      targetTiltX = (y / rect.height - 0.5) * 24; // Vertical tilt
      targetTiltY = (0.5 - x / rect.width) * 24;  // Horizontal tilt
    };
    
    const handleMouseLeave = () => {
      // Reset tilt when mouse leaves
      targetTiltX = 0;
      targetTiltY = 0;
    };
    
    const animate = () => {
      // Smooth out the movement
      tiltX += (targetTiltX - tiltX) * 0.1;
      tiltY += (targetTiltY - tiltY) * 0.1;
      
      // Apply the transform
      elem.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Add event listeners
    elem.addEventListener('mousemove', handleMouseMove);
    elem.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      elem.removeEventListener('mousemove', handleMouseMove);
      elem.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={imgRef}
      className={`overflow-hidden transition-transform duration-300 ${className || ''}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transform transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 shadow-inner"></div>
    </div>
  );
};

export default AnimatedImage;

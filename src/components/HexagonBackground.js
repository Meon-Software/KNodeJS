import React from 'react';

const HexagonBackground = () => {
  return (
    <svg 
      className="position-absolute top-0 start-0 w-100 h-100"
      viewBox="0 0 1200 800" 
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.15, zIndex: -1 }}
    >
      <defs>
        <radialGradient id="hex-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(140, 200, 75, 0.25)" />
          <stop offset="100%" stopColor="rgba(18, 18, 18, 0)" />
        </radialGradient>
        
        <pattern 
          id="hex-pattern" 
          width="120" 
          height="104" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M60,0 L120,30 L120,90 L60,120 L0,90 L0,30 Z" 
            fill="none" 
            stroke="#333" 
            strokeWidth="1" 
          />
          <path 
            d="M60,0 L120,30 L120,90 L60,120 L0,90 L0,30 Z" 
            transform="translate(60, 52)" 
            fill="none" 
            stroke="#333" 
            strokeWidth="1" 
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#hex-gradient)" />
      <rect width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  );
};

export default HexagonBackground;

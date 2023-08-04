// components/Cursor.tsx
import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="w-4 h-4 bg-black rounded-full fixed z-50 pointer-events-none"
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Cursor;

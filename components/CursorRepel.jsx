'use client';

import { useEffect } from 'react';

export default function CursorRepel() {
  useEffect(() => {
    const pointer = { x: null, y: null };
    window.__particlesPointer = pointer;

    const handleMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handleLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    window.addEventListener('mouseout', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('mouseout', handleLeave);
      delete window.__particlesPointer;
    };
  }, []);

  return null;
}

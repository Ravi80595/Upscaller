import React, { useState, useEffect } from 'react';
// import './App.css'; // Import your styles


const AnimatedCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="animated-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
    );
  };


export default AnimatedCursor
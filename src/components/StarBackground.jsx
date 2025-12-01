'use client';
import React, { useRef } from 'react';

const StarBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full bg-[#030014]">
      {/* यह वो स्पेस जैसा डार्क पर्पल ग्रेडिएंट है */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#100c28] opacity-80" />
      <Stars />
    </div>
  );
};

// Canvas Logic for Stars (Pure JS logic converted to React)
const Stars = () => {
  const canvasRef = useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 150; // तारों की संख्या

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5 - 0.25, // Velocity X
        vy: Math.random() * 0.5 - 0.25, // Velocity Y
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.beginPath();
      for (let i = 0; i < numStars; i++) {
        const s = stars[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

        // Movement Logic
        s.x += s.vx;
        s.y += s.vy;

        // Reset position if goes off screen
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
      ctx.fill();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default StarBackground;

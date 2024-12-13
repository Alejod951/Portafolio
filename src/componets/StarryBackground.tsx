import React, { useRef, useEffect } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numStars = 40;
    const starSpeed = 0.2;
    let stars: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];

    // Configuración para ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas(); // Ajusta al tamaño inicial
    window.addEventListener('resize', resizeCanvas); // Ajusta al redimensionar

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: starSpeed * (Math.random() * 0.5 + 0.5),
        speedY: starSpeed * (Math.random() * 0.5 + 0.5),
      });
    }

    const animateStars = () => {
      if (!ctx) return;

      // Relleno de fondo negro sin transparencia
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = 0;
        }
      });

      requestAnimationFrame(animateStars);
    };
    animateStars();

    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};

export default StarryBackground;

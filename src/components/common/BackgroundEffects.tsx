
import React, { useEffect, useRef } from "react";

interface BackgroundEffectsProps {
  variant?: 'default' | 'vibrant' | 'subtle' | 'cyber' | 'neon';
}

const BackgroundEffects = ({ variant = 'default' }: BackgroundEffectsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle configuration based on variant
    let particleCount: number;
    let particleSize: number;
    let particleColors: string[];
    let connectionDistance: number;
    let connectionOpacity: number;
    let particleSpeed: number;
    
    switch (variant) {
      case 'vibrant':
        particleCount = 70;
        particleSize = 2.5;
        particleColors = [
          'rgba(155, 135, 245, 0.6)', 
          'rgba(58, 54, 224, 0.5)', 
          'rgba(110, 89, 165, 0.55)',
          'rgba(176, 38, 255, 0.5)'
        ];
        connectionDistance = 180;
        connectionOpacity = 0.15;
        particleSpeed = 0.7;
        break;
      case 'cyber':
        particleCount = 60;
        particleSize = 2;
        particleColors = [
          'rgba(0, 245, 255, 0.7)', 
          'rgba(176, 38, 255, 0.5)', 
          'rgba(250, 255, 0, 0.6)'
        ];
        connectionDistance = 170;
        connectionOpacity = 0.2;
        particleSpeed = 0.8;
        break;
      case 'neon':
        particleCount = 50;
        particleSize = 2;
        particleColors = [
          'rgba(0, 245, 255, 0.8)', 
          'rgba(250, 255, 0, 0.7)', 
          'rgba(176, 38, 255, 0.7)'
        ];
        connectionDistance = 160;
        connectionOpacity = 0.25;
        particleSpeed = 0.6;
        break;
      case 'subtle':
        particleCount = 30;
        particleSize = 1.2;
        particleColors = [
          'rgba(155, 135, 245, 0.3)', 
          'rgba(58, 54, 224, 0.25)', 
          'rgba(110, 89, 165, 0.25)'
        ];
        connectionDistance = 120;
        connectionOpacity = 0.08;
        particleSpeed = 0.4;
        break;
      default: // default
        particleCount = 45;
        particleSize = 1.8;
        particleColors = [
          'rgba(155, 135, 245, 0.4)', 
          'rgba(58, 54, 224, 0.35)', 
          'rgba(110, 89, 165, 0.3)'
        ];
        connectionDistance = 150;
        connectionOpacity = 0.12;
        particleSpeed = 0.5;
        break;
    }
    
    interface Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
      pulse: number;
      pulseDirection: number;
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * particleSize + 0.8;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * particleSpeed,
        dy: (Math.random() - 0.5) * particleSpeed,
        size,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        pulse: Math.random() * 0.5,
        pulseDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Pulse effect for particle size
        p.pulse += 0.01 * p.pulseDirection;
        if (p.pulse > 1 || p.pulse < 0.5) {
          p.pulseDirection *= -1;
        }
        
        // Move particles
        p.x += p.dx;
        p.y += p.dy;
        
        // Bounce off edges with slight randomization
        if (p.x < 0 || p.x > canvas.width) {
          p.dx *= -1;
          p.dx += (Math.random() - 0.5) * 0.1; // Add slight randomization to movement
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.dy *= -1;
          p.dy += (Math.random() - 0.5) * 0.1; // Add slight randomization to movement
        }
        
        // Draw particle with pulsing effect
        const currentSize = p.size * p.pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow effect for certain variants
        if (variant === 'cyber' || variant === 'neon' || variant === 'vibrant') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            // Create gradient based on variant
            let gradientOpacity = connectionOpacity * (1 - distance / connectionDistance);
            let gradientColor = "";
            
            switch (variant) {
              case 'cyber':
              case 'neon':
                gradientColor = `rgba(0, 245, 255, ${gradientOpacity})`;
                break;
              case 'vibrant':
                gradientColor = `rgba(155, 135, 245, ${gradientOpacity})`;
                break;
              default:
                gradientColor = `rgba(110, 89, 165, ${gradientOpacity})`;
            }
            
            ctx.beginPath();
            ctx.strokeStyle = gradientColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default BackgroundEffects;

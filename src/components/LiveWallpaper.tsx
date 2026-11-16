import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Eye, EyeOff, Wind } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const LiveWallpaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(false);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    // Respect reduced motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isActive) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: -Math.random() * 0.6 - 0.2, // float upwards like fresh clean air
          opacity: Math.random() * 0.4 + 0.1,
          hue: Math.random() > 0.6 ? 42 : 160, // 42 is golden sunrise amber, 160 is clean mint freshness
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, 'rgba(254, 249, 195, 0.04)'); // soft sunrise yellow
      bgGrad.addColorStop(0.5, 'rgba(236, 253, 245, 0.03)'); // soft fresh emerald
      bgGrad.addColorStop(1, 'rgba(238, 242, 255, 0.03)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion update
        p.x += p.speedX * speedMultiplier;
        p.y += p.speedY * speedMultiplier;
        p.pulsePhase += p.pulseSpeed;

        // Subtle mouse push
        if (mousePos.current.active) {
          const dx = p.x - mousePos.current.x;
          const dy = p.y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const angle = Math.atan2(dy, dx);
            const force = (120 - dist) / 120;
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulsePhase));
        const glowRadius = p.size * 2.8;

        // Draw soft glow aura
        const glow = ctx.createRadialGradient(p.x, p.y, p.size * 0.2, p.x, p.y, glowRadius);
        if (p.hue === 42) {
          glow.addColorStop(0, `rgba(245, 158, 11, ${currentOpacity * 0.6})`);
          glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
        } else {
          glow.addColorStop(0, `rgba(16, 185, 129, ${currentOpacity * 0.6})`);
          glow.addColorStop(1, 'rgba(16, 185, 129, 0)');
        }

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw inner crisp nucleus
        ctx.fillStyle = p.hue === 42 
          ? `rgba(251, 191, 36, ${currentOpacity})` 
          : `rgba(52, 211, 153, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isActive, speedMultiplier]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{ opacity: isActive ? 1 : 0 }}
        aria-hidden="true"
      />

      {/* Discreet Live Wallpaper Controls Toggle */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-30">
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md rounded-full px-2.5 py-1 text-xs text-slate-700">
          <button
            onClick={() => setIsActive(!isActive)}
            className="flex items-center gap-1 hover:text-amber-600 transition-colors py-0.5 px-1 rounded"
            title={isActive ? 'Pause ambient live wallpaper' : 'Resume live wallpaper'}
            aria-label="Toggle ambient animation"
          >
            {isActive ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-medium hidden sm:inline">Live Wallpaper</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium hidden sm:inline">Wallpaper Off</span>
              </>
            )}
          </button>

          {isActive && (
            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 1.8 : prev === 1.8 ? 0.5 : 1))}
              className="text-[11px] text-slate-500 hover:text-slate-900 px-1 py-0.5 border-l border-slate-200"
              title="Change animation flow speed"
            >
              {speedMultiplier === 1 ? '1x' : speedMultiplier === 1.8 ? 'Fast' : 'Gentle'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

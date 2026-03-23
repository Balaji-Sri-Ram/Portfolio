import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  angle: (i / 60) * Math.PI * 2,
  radius: 80 + Math.random() * 160,
  size: 1 + Math.random() * 2.5,
  speed: 0.3 + Math.random() * 0.7,
  delay: Math.random() * 2,
}));

const CODE_FRAGMENTS = [
  { text: "</>", x: -200, y: -120 },
  { text: "{ }", x: 180, y: -90 },
  { text: "⚛", x: -160, y: 100 },
  { text: "λ", x: 200, y: 130 },
  { text: "[ ]", x: -80, y: -180 },
  { text: "( )", x: 100, y: 170 },
  { text: "API", x: -220, y: 10 },
  { text: "%", x: 230, y: -20 },
  { text: "∑", x: -40, y: 170 },
  { text: "π", x: 60, y: -150 },
];

const IntroAnimation = ({ theme, onComplete }) => {
  const [phase, setPhase] = useState("gather");
  const canvasRef = useRef(null);
  const animationRef = useRef(0);

  const isDark = theme === 'dark';

  // Custom colors mapped from user's theme (respecting both strictly)
  const bgColor = isDark ? "#0a0a0a" : "#f5f2eb";
  const primaryColorHex = isDark ? "#00F0FF" : "#8d6e63"; // Electric cyan vs accent brown

  useEffect(() => {
    // Timings adapted slightly to match React state batching
    const t1 = setTimeout(() => setPhase("pulse"), 800);
    const t2 = setTimeout(() => setPhase("text"), 1600);
    const t3 = setTimeout(() => setPhase("exit"), 3400);
    const t4 = setTimeout(onComplete, 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  // Canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      time += 0.008;

      PARTICLES.forEach((p) => {
        const t = time * p.speed + p.delay;
        const currentRadius = p.radius * (phase === "gather" ? 1.5 : phase === "pulse" ? 0.6 + Math.sin(t * 2) * 0.15 : phase === "text" ? 0.4 : 2.5);
        const x = cx + Math.cos(p.angle + t * 0.5) * currentRadius;
        const y = cy + Math.sin(p.angle + t * 0.5) * currentRadius;
        const alpha = phase === "exit" ? Math.max(0, 0.6 - time * 0.3) : 0.4 + Math.sin(t * 3) * 0.4;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(0, 240, 255, ${alpha})` : `rgba(141, 110, 99, ${alpha})`;
        ctx.fill();

        // Connection lines to nearby particles
        if (p.id % 3 === 0) {
          const next = PARTICLES[(p.id + 7) % PARTICLES.length];
          const nt = time * next.speed + next.delay;
          const nr = next.radius * (phase === "gather" ? 1.5 : phase === "pulse" ? 0.6 : phase === "text" ? 0.4 : 2.5);
          const nx = cx + Math.cos(next.angle + nt * 0.5) * nr;
          const ny = cy + Math.sin(next.angle + nt * 0.5) * nr;
          const dist = Math.sqrt((x - nx) ** 2 + (y - ny) ** 2);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = isDark ? `rgba(0, 240, 255, ${0.15 * (1 - dist / 200)})` : `rgba(141, 110, 99, ${0.15 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [phase, isDark]);

  const currentPhase = phase;
  const isExiting = currentPhase === "exit";
  const showText = currentPhase === "text" || isExiting;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: bgColor }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Canvas particle field */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.8 }}
          />

          {/* Ambient radial glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              background: isDark
                ? "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(141, 110, 99, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: phase === "pulse" ? [1, 1.3, 1] : phase === "text" ? 1.5 : 1,
              opacity: currentPhase === "exit" ? 0 : 1,
            }}
            transition={{ duration: phase === "pulse" ? 1.5 : 1, ease: "easeInOut", repeat: phase === "pulse" ? Infinity : 0 }}
          />

          {/* Code fragments that converge to center */}
          {CODE_FRAGMENTS.map((frag, i) => (
            <motion.span
              key={i}
              className="absolute font-mono text-sm font-semibold select-none z-10"
              style={{ color: primaryColorHex }}
              initial={{ opacity: 0, x: frag.x * 1.8, y: frag.y * 1.8, scale: 0.5 }}
              animate={{
                opacity: currentPhase === "gather" ? [0, 0.6] : currentPhase === "pulse" ? 0.8 : 0,
                x: currentPhase === "gather" ? frag.x : currentPhase === "pulse" ? frag.x * 0.3 : 0,
                y: currentPhase === "gather" ? frag.y : currentPhase === "pulse" ? frag.y * 0.3 : 0,
                scale: currentPhase === "text" || currentPhase === "exit" ? 0 : 1,
              }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {frag.text}
            </motion.span>
          ))}

          {/* Central core — pulsing dot */}
          <motion.div
            className="absolute rounded-full z-20"
            style={{
              width: 8,
              height: 8,
              background: primaryColorHex,
              boxShadow: isDark
                ? "0 0 30px rgba(0,240,255,0.6), 0 0 60px rgba(0,240,255,0.3), 0 0 100px rgba(0,240,255,0.1)"
                : "0 0 30px rgba(141,110,99,0.5), 0 0 60px rgba(141,110,99,0.3), 0 0 100px rgba(141,110,99,0.1)",
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: currentPhase === "text" || currentPhase === "exit" ? [1, 0] : [0, 1, 1.5, 1],
              opacity: currentPhase === "text" ? 0 : 1,
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Expanding ring on pulse */}
          {phase === "pulse" && (
            <motion.div
              className={`absolute rounded-full border ${isDark ? 'border-[#00F0FF]/40' : 'border-[#8d6e63]/40'} z-10`}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: 300, height: 300, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
            />
          )}

          {/* Welcome text */}
          <motion.div
            className="absolute z-30 text-center pointer-events-none"
            initial={{ opacity: 0, scale: 0, filter: "blur(20px)" }}
            animate={
              showText
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
              style={{ lineHeight: 0.95 }}
            >
              <span className={isDark ? "text-white" : "text-[#1a1a1a]"}>Welcome</span>
            </h1>
            <motion.p
              className={`text-sm md:text-base font-mono mt-4 tracking-widest uppercase ${isDark ? "text-gray-400" : "text-[#555]"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={showText ? { opacity: 0.7, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              to my portfolio
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import Img from '../assets/my_pic.jpg';

const useTypewriter = (words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? deletingSpeed : typingSpeed, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed]);

    return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

const Hero = ({ theme }) => {
    const imageContainerRef = useRef(null);
    const [glowStyle, setGlowStyle] = useState({ opacity: 0, background: '' });

    // Typing Effect Text
    const typedText = useTypewriter([
        "Full Stack Developer",
        "CS Engineering Student",
        "Creative Problem Solver",
        "Tech Enthusiast"
    ]);

    // Global listener for orbital border glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageContainerRef.current) return;
            const rect = imageContainerRef.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
            const imageRadius = rect.width / 2;

            // New request: 1000px from CENTER
            const MAX_DISTANCE = 1000;

            if (distanceFromCenter <= MAX_DISTANCE) {
                // Strength calculation: 1 at center, 0 at 1000px
                // You can tweak this curve (e.g., exponential) if linear is too harsh/soft
                let strength = 1 - (distanceFromCenter / MAX_DISTANCE);
                // Clamp strength to ensure it's valid
                strength = Math.max(0, Math.min(1, strength));

                // 🔄 ANGLE AROUND THE IMAGE (Orbital Logic)
                const angle = Math.atan2(dy, dx);

                // Glow moves around the image edge. 
                // "Pulling effect": The glow sits on the edge closest to cursor.
                // We keep it slightly outside the image radius so it bleeds nicely.
                const glowRadius = imageRadius + 20;
                const glowX = (rect.width / 2) + Math.cos(angle) * glowRadius;
                const glowY = (rect.height / 2) + Math.sin(angle) * glowRadius;

                // Determine Color based on Theme
                // Light Mode: Darker Sand (approx #B48C5A) -> rgba(180, 140, 90, ...)
                // Dark Mode: Neon Green (#22c55e) -> rgba(34, 197, 94, ...)
                const isLight = theme === 'light';
                const baseColor = isLight ? '180, 140, 90' : '34, 197, 94';

                setGlowStyle({
                    opacity: strength, // Opacity fades as you move away
                    background: `radial-gradient(circle at ${glowX}px ${glowY}px, rgba(${baseColor}, ${0.8 * strength}), rgba(${baseColor}, 0.3), transparent 70%)`
                });
            } else {
                setGlowStyle({ opacity: 0, background: '' });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [theme]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
            <div className="container grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 relative z-10 md:pl-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brown dark:text-neon-green font-medium tracking-wide"
                    >
                        HELLO, I'M
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-charcoal dark:text-white mt-4 mb-2 leading-tight">
                        Parasa Balaji <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown to-light-brown dark:from-neon-green dark:to-emerald-600">
                            Sri Ram
                        </span>
                    </h1>

                    {/* Animated Typing Text */}
                    <div className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-6 h-10 flex items-center">
                        <span className="mr-2">And I'm a</span>
                        <span className="text-brown dark:text-neon-green font-mono">
                            {typedText}
                        </span>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        A passionate Computer Science Engineering student and developer. I build accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-charcoal dark:bg-neon-green text-white dark:text-black px-8 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-brown dark:hover:bg-emerald-400 transition-colors shadow-lg"
                        >
                            <Mail size={18} />
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            download
                            className="border-2 border-charcoal dark:border-neon-green text-charcoal dark:text-neon-green px-8 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-charcoal hover:text-white dark:hover:bg-neon-green/10 transition-all"
                        >
                            <Download size={18} />
                            Resume
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center relative p-[150px]"
                >
                    <div
                        ref={imageContainerRef}
                        className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105" /* Reduced scale */
                    >
                        {/* Orbital Border Glow - No Pulse, Fixed to Edge */}
                        <div
                            className="absolute rounded-full pointer-events-none transition-opacity duration-150 ease-out" /* Fast transition */
                            style={{
                                inset: '-40px', // Reduced glow size 
                                background: glowStyle.background,
                                opacity: glowStyle.opacity,
                                filter: 'blur(35px)',
                                zIndex: -1
                            }}
                        />

                        {/* Static Subtle Glow Background (Base) */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brown/10 to-transparent dark:from-neon-green/5 dark:to-transparent blur-2xl -z-10"></div>

                        <img
                            src={Img}
                            alt="Parasa Balaji Sri Ram"
                            className="w-full h-full object-cover rounded-full border-4 border-white/50 dark:border-neon-green/30 shadow-2xl relative z-10"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown className="animate-bounce text-brown dark:text-neon-green" />
            </motion.div>
        </section>
    );
};

export default Hero;

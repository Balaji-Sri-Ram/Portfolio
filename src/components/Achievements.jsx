import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, AwardIcon } from 'lucide-react'; // Using relevant icons

const achievements = [
    {
        id: 1,
        title: "Top 3 — NLP Workshop",
        description: "Ranked in the Top 3 teams in an NLP Workshop for building an innovative Text-to-Speech system.",
        date: "December 2025",
        icon: <AwardIcon strokeWidth={1.5} size={22} className="relative z-10" />
    },
    {
        id: 2,
        title: "Research Incentive",
        description: "Received research incentive for university approved patent: 'SMART BLIND SHOE WITH INTEGRATED HAND BAND USING ARDUINO'.",
        date: "March 2024",
        icon: <Award strokeWidth={1.5} size={22} className="relative z-10" />
    },
    {
        id: 3,
        title: "Top 10 Teams - Hackathon",
        description: "Secured a position in the Top 10 teams (out of 50+) in HackWithVertos 1.0, a 24-Hour Hackathon.",
        date: "February 2024",
        icon: <Trophy strokeWidth={1.5} size={22} className="relative z-10" />
    }
];

// Magnetic Component for subtle depth interaction
const MagneticWrapper = ({ children, className }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (window.innerWidth < 1024) return; // Disable effect on mobile devices
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Intensity of the magnetic pull
        const x = (clientX - centerX) * 0.05;
        const y = (clientY - centerY) * 0.05;

        setPosition({ x, y });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Achievements = ({ theme }) => {
    const containerRef = useRef(null);

    return (
        <section id="achievements" className="py-24 relative bg-l-bg dark:bg-[#050505] transition-colors duration-500 overflow-hidden" ref={containerRef}>

            {/* Global Keyframe CSS Injection for the sweep hover effect */}
            <style>
                {`
                @keyframes sweep {
                    0% { left: -100%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { left: 200%; opacity: 0; }
                }
                `}
            </style>

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-24 text-charcoal dark:text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <p className="text-brown dark:text-primary-cyan font-mono tracking-widest text-sm mb-2">&lt;MILESTONES /&gt;</p>
                        <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>
                        <div className="w-20 h-1 bg-brown dark:bg-primary-cyan mx-auto rounded-full mt-4" />
                    </motion.div>
                </div>

                {/* Simplified Clean Grid Container */}
                <div className="relative w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 group/timeline pb-10">

                    {/* ====== TIMELINE ITEMS ====== */}
                    {achievements.map((item, index) => {
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="relative w-full flex flex-col items-center relative z-10 transition-opacity duration-500 hover:!opacity-100 group-hover/timeline:opacity-50 group"
                            >
                                <div className="w-full">
                                    <MagneticWrapper className="group/card relative w-full flex flex-col justify-between p-7 lg:p-9 rounded-[1.5rem] bg-white/50 dark:bg-[#09090b]/80 backdrop-blur-2xl border border-brown/10 dark:border-white/5 hover:border-brown dark:hover:border-[#00F0FF]/30 transition-all duration-500 overflow-hidden cursor-default min-h-[310px]">

                                        {/* Hover Soft Light Sweep Animation passing over panel */}
                                        <div className={`absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-[#00F0FF]/15' : 'via-brown/15'} to-transparent skew-x-[-20deg] group-hover/card:animate-[sweep_1.5s_ease-in-out_infinite]`} />

                                        {/* Upper Details Content Box */}
                                        <div className="relative z-10">
                                            {/* Top Monoline Icon Container */}
                                            <div className="w-[48px] h-[48px] mb-8 rounded-xl border border-brown/10 dark:border-white/5 bg-brown/5 dark:bg-[#121212] flex items-center justify-center text-brown dark:text-[#00F0FF] group-hover/card:scale-110 transition-transform duration-500 group-hover/card:border-brown/30 dark:group-hover/card:border-[#00F0FF]/30 relative overflow-hidden">
                                                {/* Micro Ripple Interaction */}
                                                <div className={`absolute inset-0 rounded-xl ${theme === 'dark' ? 'bg-[#00F0FF]/25' : 'bg-brown/25'} opacity-0 group-hover/card:animate-ping`} />
                                                {item.icon}
                                            </div>

                                            <h3 className="text-[20px] lg:text-[22px] font-bold text-charcoal dark:text-[#f4f4f5] mb-4 transition-colors duration-300 relative inline-block group-hover/card:text-brown dark:group-hover/card:text-white">
                                                {item.title}
                                                {/* Animated Underline */}
                                                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brown dark:bg-[#00F0FF] transition-all duration-500 group-hover/card:w-full opacity-80" />
                                            </h3>

                                            <p className="text-[14.5px] font-medium text-gray-500 dark:text-[#a1a1aa] leading-relaxed group-hover/card:text-charcoal dark:group-hover/card:text-[#d4d4d8] transition-colors duration-300">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Lower Date Information Lock */}
                                        <div className="relative z-10 mt-10">
                                            <span className="text-[12px] font-mono tracking-widest text-brown/70 dark:text-[#00F0FF]/70 group-hover/card:text-brown dark:group-hover/card:text-[#00F0FF] uppercase transition-colors duration-300">
                                                {item.date}
                                            </span>
                                        </div>
                                    </MagneticWrapper>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

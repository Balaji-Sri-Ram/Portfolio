import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const educationData = [
    {
        id: 1,
        title: "B.Tech in Computer Science & Engineering",
        institution: "Lovely Professional University, Punjab",
        duration: "2023 - Present",
        description: "CGPA : 8.40",
        icon: <GraduationCap size={18} />
    },
    {
        id: 2,
        title: "Intermediate (MPC)",
        institution: "Aditya Junior College, Narsapur",
        duration: "2021 - 2023",
        description: "Percentage : 92%",
        icon: <School size={18} />
    },
    {
        id: 3,
        title: "Matriculation (SSC)",
        institution: "Aditya School, Narsapur",
        duration: "2020 - 2021",
        description: "Percentage : 90%",
        icon: <BookOpen size={18} />
    }
];

const Experience = ({ theme }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="experience" className="py-24 relative bg-l-bg dark:bg-[#0a0a0a] transition-colors duration-300" ref={containerRef}>
            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] font-bold text-l-accent dark:text-primary-cyan uppercase tracking-[0.25em] mb-4 drop-shadow-sm"
                    >
                        &lt;ACADEMIC JOURNEY /&gt;
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-l-text-primary dark:text-[#f8f9fa] relative inline-block pb-5 tracking-tight"
                    >
                        Education
                        <div className="w-20 h-1 bg-brown dark:bg-primary-cyan mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(0,240,255,0.3)]" />
                    </motion.h2>
                </div>

                {/* Timeline Layout */}
                <div className="relative mx-auto mt-6 max-w-2xl">
                    
                    {/* The Static Background Line */}
                    {/* Positioned at 23px because the icon width is 48px (12rem), making 24px its exact center. */}
                    {/* A 2px line at 23px covers 23px-25px, meaning its center is 24px perfectly! */}
                    <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-l-border/60 dark:bg-white/5" />

                    {/* The Dynamic Scroll Filled Line */}
                    <div className="absolute left-[23px] top-6 bottom-6 w-[2px] transform overflow-hidden rounded-full z-0">
                        <motion.div 
                            style={{ 
                                scaleY: scrollYProgress, 
                                transformOrigin: "top" 
                            }} 
                            className="w-full h-full bg-l-accent dark:bg-primary-cyan shadow-[0_0_15px_rgba(129,140,248,0.8)]" 
                        />
                    </div>

                    {/* Timeline Items List */}
                    <div className="space-y-16">
                        {educationData.map((item, index) => {
                            return (
                                <div key={item.id} className="relative z-10 flex items-start gap-6 md:gap-12 group">
                                    
                                    {/* Timeline Node (Icon container) */}
                                    {/* mt-1 to push the circle down slightly from the top edge to match the screenshot aesthetics perfectly */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-[#16161a] border border-l-border/50 dark:border-white/10 flex items-center justify-center text-l-accent dark:text-primary-cyan transition-all duration-300 group-hover:border-l-accent/50 dark:group-hover:border-primary-cyan/50 shadow-sm mt-1 z-10 group-hover:bg-l-accent/5 dark:group-hover:bg-primary-cyan/5">
                                        {item.icon}
                                    </div>

                                    {/* Content Container */}
                                    <div className="flex-1 pb-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="flex flex-col gap-1.5 pt-2" 
                                        >
                                            {/* Duration Text */}
                                            <span className="text-[13px] font-mono text-l-text-secondary dark:text-[#a1a1aa] tracking-widest font-semibold cursor-default opacity-60">
                                                {item.duration}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-[22px] font-bold text-l-text-primary dark:text-[#f8f9fa] mt-1 group-hover:text-l-accent dark:group-hover:text-primary-cyan transition-colors">
                                                {item.title}
                                            </h3>

                                            {/* Institution text using accent color */}
                                            <h4 className="text-[15px] md:text-base font-medium text-l-accent dark:text-primary-cyan mb-2">
                                                {item.institution}
                                            </h4>

                                            {/* Description paragraph */}
                                            <p className="text-[14px] md:text-[15px] text-l-text-secondary/80 dark:text-[#9ca3af] leading-relaxed font-medium max-w-2xl">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;

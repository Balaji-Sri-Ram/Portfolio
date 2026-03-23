import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import { SocialLink } from './ProfileCard';
import myPic from '../assets/profile1.jpeg';
import { LeetCode } from './LeetCode';

const Typewriter = ({ words, loop, cursor, cursorStyle, typeSpeed, deleteSpeed, delaySpeed }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [blink, setBlink] = React.useState(true);

    // Typing logic
    React.useEffect(() => {
        if (subIndex === words[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), delaySpeed);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, words, typeSpeed, deleteSpeed, delaySpeed]);

    // Blink logic
    React.useEffect(() => {
        const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <span className="inline-block">
            {words[index].substring(0, subIndex)}
            {cursor && (
                <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-1 font-extralight text-l-accent dark:text-primary-cyan`}>
                    {cursorStyle || '|'}
                </span>
            )}
        </span>
    );
};

const Hero = ({ theme }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden relative bg-l-bg dark:bg-dark-bg transition-colors duration-500">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-[0.4] dark:opacity-[0.1] -z-10 pointer-events-none"></div>

            {/* Animated Gradient Orbs for Depth (Subtle) */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-l-accent/5 dark:bg-primary-cyan/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-l-accent/5 dark:bg-primary-cyan/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Text Content - Left Column (lg:col-span-8) */}
                <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1 lg:pl-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <p className="text-l-text-secondary/60 dark:text-gray-text/60 text-base md:text-lg font-medium tracking-tight">
                            Hello, I am
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-[80px] font-bold text-l-text-primary dark:text-gray-100 leading-[1.0] tracking-tight mb-2 font-serif">
                            Parasa <br /> Balaji Sri Ram
                        </h1>

                        <div className="flex items-center min-h-[30px]">
                            <h2 className="text-lg md:text-2xl font-bold text-l-accent dark:text-primary-cyan uppercase tracking-tight">
                                <Typewriter
                                    words={['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h2>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base md:text-lg text-l-text-secondary/70 dark:text-gray-text max-w-2xl leading-relaxed font-medium lg:pl-4 border-l-2 border-l-border/10 dark:border-l-white/5"
                    >
                        A developer dedicated to building high-end, scalable web experiences where refined design meets robust engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
                    >
                        <a
                            href="#contact"
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-l-text-primary dark:bg-white text-white dark:text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/10"
                        >
                            <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                            Get in Touch
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            download="Parasa_Balaji_Sri_Ram_Resume.pdf"
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border-2 border-l-text-primary/10 dark:border-white/10 text-l-text-primary dark:text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-l-text-primary/5 dark:hover:bg-white/5"
                        >
                            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                            Resume
                        </a>
                    </motion.div>
                </div>

                {/* Profile Section - Right Column (lg:col-span-4) - SYNCED FLOATING */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 gap-8"
                >
                    {/* Circular Profile Image (Individual animation removed, inherited from parent) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-l-accent/50 to-transparent dark:from-primary-cyan/50 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-white/10">
                            <img src={myPic} alt="Profile" className="w-full h-full object-cover object-top" />
                        </div>
                    </motion.div>

                    {/* Social Icons (Individual animation removed, inherited from parent) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <SocialLink 
                            href="https://github.com/Balaji-Sri-Ram" 
                            icon={<Github size={24} />} 
                            label="GitHub"
                            hoverColor="dark:hover:bg-white dark:hover:text-black hover:bg-[#3d2b1f] hover:text-white"
                        />
                        <SocialLink 
                            href="https://www.linkedin.com/in/balaji-sri-ram-parasa" 
                            icon={<Linkedin size={24} />} 
                            label="LinkedIn"
                            hoverColor="dark:hover:bg-white/90 dark:hover:text-blue-600 hover:bg-[#3d2b1f] hover:text-white"
                        />
                        <SocialLink 
                            href="https://leetcode.com/u/ramu_parasa/" 
                            icon={<LeetCode size={24} />} 
                            label="LeetCode"
                            hoverColor="dark:hover:bg-white hover:bg-[#3d2b1f]"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - FIX: Wrapped in <a> for navigation */}
            <a href="#about" className="cursor-pointer">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                >
                    <div className="w-6 h-10 border-2 border-l-border dark:border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-l-accent dark:bg-primary-cyan rounded-full"
                        />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Scroll</span>
                </motion.div>
            </a>
        </section>
    );
};

export default Hero;

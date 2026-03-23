import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { LeetCode } from './LeetCode';
import myPic from '../assets/profile1.jpeg';

const ProfileCard = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.0, ease: "easeInOut" }}
            className="w-full max-w-[360px] h-[520px] mx-auto rounded-[40px] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 flex flex-col items-center relative overflow-hidden transition-all duration-500 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] group/card"
        >
            {/* Ambient Background Glow (Internal) */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-l-accent/10 dark:bg-primary-cyan/10 rounded-full blur-3xl pointer-events-none group-hover/card:bg-l-accent/20 dark:group-hover/card:bg-primary-cyan/20 transition-colors duration-700"></div>

            {/* Profile Image with Advanced Masking */}
            <div className="relative w-full h-[65%] shrink-0 flex justify-center z-10 p-2">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                    <img 
                        src={myPic} 
                        alt="Parasa Balaji" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/40 to-transparent"></div>
                </div>
            </div>

            {/* Typography with Refined Spacing */}
            <div className="text-center w-full z-10 px-6 mt-2">
                <h3 className="text-3xl font-black text-l-text-primary dark:text-gray-100 tracking-tight mb-1">
                    Balaji Sri Ram
                </h3>
                <p className="text-sm font-bold text-l-text-secondary dark:text-gray-text tracking-widest uppercase opacity-80 transition-all duration-700 bg-gradient-to-r from-l-accent to-l-accent dark:from-primary-cyan dark:to-primary-cyan bg-[length:0%_100%] bg-no-repeat bg-clip-text group-hover/card:bg-[length:100%_100%] group-hover/card:text-transparent">
                    Full Stack Developer
                </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-1 bg-l-accent/30 dark:bg-primary-cyan/30 mt-6 mb-auto rounded-full"></div>

            {/* Social Icons - Stylized and Minimalist */}
            <div className="flex items-center justify-center gap-4 z-10 w-full px-6 mb-8 mt-4">
                
                <SocialLink 
                    href="https://leetcode.com/u/ramu_parasa/" 
                    icon={<LeetCode size={20} />} 
                    label="LeetCode"
                    hoverColor="dark:hover:bg-white hover:bg-[#3d2b1f]"
                />
                <SocialLink 
                    href="https://www.linkedin.com/in/balaji-sri-ram-parasa" 
                    icon={<Linkedin size={20} />} 
                    label="LinkedIn"
                    hoverColor="dark:hover:bg-white/90 dark:hover:text-blue-600 hover:bg-[#3d2b1f] hover:text-white"
                />
                <SocialLink 
                    href="https://github.com/Balaji-Sri-Ram" 
                    icon={<Github size={20} />} 
                    label="GitHub"
                    hoverColor="dark:hover:bg-white dark:hover:text-black hover:bg-[#3d2b1f] hover:text-white"
                />

            </div>
            
        </motion.div>
    );
};

export const SocialLink = ({ href, icon, label, hoverColor }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-12 h-12 rounded-2xl bg-l-border/30 dark:bg-white/5 flex items-center justify-center text-l-text-primary dark:text-gray-300 hover:text-white dark:hover:text-black border border-l-border/50 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 group/icon ${hoverColor}`}
        aria-label={label}
    >
        {icon}
    </a>
);

export default ProfileCard;

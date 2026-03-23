import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import fccImg from '../assets/freecodecampcertificate.png';
import gokboruCertImg from '../assets/gokborucertificate.png';
import nptelCertImg from '../assets/nptelcetificate.png';
import courseraImg from '../assets/courseracertificate.png';
import oracleCertImg from '../assets/oraclecertificate.png';

const certificates = [
    {
        date: "March 2026",
        title: "The Science of Well-Being",
        provider: "Coursera",
        image: courseraImg,
        link: "https://www.coursera.org/account/accomplishments/verify/312JWKV95OL7"
    },
    {
        date: "June 2025",
        title: "Front-End Web Development",
        provider: "Gokboru Tech Pvt Ltd",
        image: gokboruCertImg,
        link: "https://drive.google.com/file/d/1_s4LEbhQ7p9TqJm5oDPpDKtPI5aNK6hy/view?usp=sharing"
    },
    {
        date: "November 2025",
        title: "Responsive Web Design",
        provider: "freeCodeCamp",
        image: fccImg,
        link: "https://drive.google.com/file/d/1SIqPqZSPE0ra-VCw4VQXD1OvZQNVe9EK/view?usp=sharing"
    },
    {
        date: "Jan 2025 - Apr 2025",
        title: "Cloud Computing",
        provider: "NPTEL",
        image: nptelCertImg,
        link: "https://drive.google.com/file/d/1IqyVfaVr76T72bjFIqseDbVQvYJNZo7O/view?usp=sharing"
    },
    {
        date: "March 2026",
        title: "Oracle Data Platform 2025 Certified Foundations Associate",
        provider: "Oracle",
        image: oracleCertImg,
        link: "https://drive.google.com/file/d/1FeRUJGbtiB3JO54ePolM9wXIhWaEnxpL/view?usp=drive_link"
    }
];

const Certifications = ({ theme }) => {
    const cardVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.02, 
            transition: { duration: 0.6, ease: "easeInOut" }
        }
    };

    const imageVariants = {
        initial: { 
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 0,
        },
        hover: { 
            clipPath: 'circle(120% at 50% 50%)',
            opacity: 1,
            transition: { 
                duration: 0.6, 
                ease: "easeInOut"
            }
        }
    };

    const contentVariants = {
        initial: { opacity: 1 },
        hover: { 
            opacity: 0, 
            transition: { duration: 0.6, ease: "easeInOut" } 
        }
    };

    return (
        <section id="certifications" className="py-24 relative bg-l-bg dark:bg-[#0f0f0f] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-l-text-primary dark:text-white mb-6 tracking-tight">
                        Certifications
                        <span className="block h-1 w-20 bg-l-accent dark:bg-primary-cyan mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.3)]"></span>
                    </h2>
                    <p className="text-l-text-secondary/70 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        Validation of expertise and commitment to continuous learning.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {certificates.map((cert, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                initial="initial"
                                whileHover="hover"
                                className="group relative h-[300px] w-full md:w-[calc(33.33%-22px)] min-w-[300px] rounded-[2rem] bg-white/50 dark:bg-white/5 border border-brown/10 dark:border-white/10 hover:border-brown dark:hover:border-primary-cyan transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-6 shadow-sm hover:shadow-2xl"
                            >
                                {/* Inner Glow Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brown/[0.02] dark:from-primary-cyan/[0.02] to-transparent pointer-events-none" />

                                {/* Default Content */}
                                <motion.div 
                                    variants={contentVariants}
                                    className="relative z-10 flex flex-col items-center w-full"
                                >
                                    <div className="mb-6 p-4 bg-brown/5 dark:bg-primary-cyan/5 rounded-2xl border border-brown/10 dark:border-white/10 group-hover:border-brown/20 dark:group-hover:border-primary-cyan/20 transition-colors duration-500 shadow-sm">
                                        <Award className="w-8 h-8 text-brown dark:text-primary-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.2)]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-charcoal dark:text-white text-center mb-2 px-4 leading-tight">
                                        {cert.title}
                                    </h3>
                                    
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-5">
                                        {cert.provider}
                                    </p>

                                    <div className="px-3 py-1 bg-brown/5 dark:bg-white/5 rounded-full border border-brown/10 dark:border-white/10">
                                        <span className="text-[10px] font-bold text-brown/60 dark:text-gray-400 uppercase tracking-widest">
                                            {cert.date}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Hover Reveal Image */}
                                <motion.div
                                    variants={imageVariants}
                                    className="absolute inset-0 z-20"
                                >
                                    <div className="relative w-full h-full overflow-hidden shadow-2xl">
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/25" />
                                        
                                        {/* Refined Hover Button */}
                                        <div className="absolute inset-0 flex items-center justify-center p-6 mt-28">
                                            <motion.a 
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ 
                                                    scale: 1.05, 
                                                    backgroundColor: theme === 'dark' ? '#000000' : '#000000',
                                                    color: theme === 'dark' ? '#00f0ff' : '#ffffff',
                                                    borderColor: theme === 'dark' ? '#00f0ff' : '#000000'
                                                }}
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-l-accent dark:border-primary-cyan text-l-accent dark:text-primary-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(0,240,255,0.1)] font-bold text-[11px] bg-transparent cursor-pointer no-underline"
                                            >
                                                Verify Credential
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


export default Certifications;

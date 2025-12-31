import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import TiltCard from './TiltCard';
import byodImg from '../assets/byod.png';
import smartParkingImg from '../assets/smart_parking.png';
import codeconnectImg from '../assets/codeconnect.png';
import photoboothImg from '../assets/photobooth.png';

const projects = [
    {
        title: "CodeConnect",
        description: "A full-stack MERN coding platform helping users master algorithms and connect with companies. Features real-time code execution, problem categorization, and interview prep.",
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        link: "https://github.com/Balaji-Sri-Ram/CodeConnect",
        liveLink: "https://code-connect-sand-eta.vercel.app",
        date: "December 2025",
        image: codeconnectImg
    },
    {
        title: "Smart Parking System",
        description: "Advanced web-based parking system enabling slot booking, secure payments, and QR-based entry. Features user & admin dashboards and real-time availability.",
        tags: ["Python Flask", "HTML/CSS", "JS", "SQLite"],
        link: "https://github.com/Balaji-Sri-Ram/Smart-Parking-System",
        date: "October 2025",
        image: smartParkingImg
    },
    {
        title: "BYOD Management System",
        description: "Secure web-based BYOD management system for classrooms to monitor and control student devices in real time. Features centralized dashboards and enhances digital classroom safety.",
        tags: ["HTML", "CSS", "Tailwind", "JS", "PHP", "MySQL"],
        link: "https://github.com/Balaji-Sri-Ram/BYOD",
        date: "April 2025",
        image: byodImg
    },
    {
        title: "PhotoBooth Chatbot",
        description: "An engaging AI chatbot for photo booths that interacts with users in real-time. Built with a Python backend and responsive frontend for seamless conversational experiences.",
        tags: ["Python", "Flask", "HTML/CSS", "JavaScript", "Dialogflow"],
        link: "https://github.com/Balaji-Sri-Ram/PhotoBooth-Chatbot",
        liveLink: "https://photo-booth-chatbot.vercel.app",
        date: "November 2025",
        image: photoboothImg
    }
];

const Projects = ({ theme }) => {
    const spotlightColor = theme === 'light'
        ? "rgba(180, 140, 90, 0.4)"
        : "rgba(0, 255, 136, 0.4)";

    return (
        <section id="projects" className="py-20 bg-cream dark:bg-dark-bg transition-colors duration-300">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-16 text-center text-charcoal dark:text-white"
                >
                    My Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <SpotlightCard
                                    spotlightColor={spotlightColor}
                                    className="h-full flex flex-col group relative bg-white dark:bg-card-dark rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:border-brown dark:hover:border-neon-green/50 transition-all"
                                >
                                    <div className="h-64 bg-beige dark:bg-[#202020] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 flex-shrink-0">
                                        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-sm text-light-brown dark:text-neon-green font-mono">{project.date}</span>
                                                <h3 className="text-2xl font-bold text-charcoal dark:text-white mt-1 group-hover:text-brown dark:group-hover:text-neon-green transition-colors">{project.title}</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                {project.liveLink && (
                                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-charcoal dark:text-gray-400 hover:text-brown dark:hover:text-neon-green transition-colors relative z-10" title="Live Demo">
                                                        <ExternalLink size={24} />
                                                    </a>
                                                )}
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-charcoal dark:text-gray-400 hover:text-brown dark:hover:text-neon-green transition-colors relative z-10" title="View Code">
                                                    <Github size={24} />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 h-[4.5rem] overflow-hidden">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-semibold px-3 py-1 bg-charcoal dark:bg-neon-green/10 text-white dark:text-neon-green rounded-full border border-transparent dark:border-neon-green/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

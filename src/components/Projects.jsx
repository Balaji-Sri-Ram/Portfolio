import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ArrowDown } from 'lucide-react';
import byodImg from '../assets/byod.png';
import smartParkingImg from '../assets/smart_parking.png';
import codeconnectImg from '../assets/codeconnect.png';
import photoboothImg from '../assets/photobooth.png';

const projects = [
    {
        title: "CodeConnect",
        description: "A full-stack MERN coding platform helping users master algorithms and connect with companies. Features real-time code execution and interview prep.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://github.com/Balaji-Sri-Ram/CodeConnect",
        liveLink: "https://code-connect-sand-eta.vercel.app",
        date: "December 2025",
        image: codeconnectImg,
        keyFeatures: [
            "Structured coding problem library with difficulty categorization",
            "Detailed problem statements with input/output specifications",
            "Multi-language in-browser code editor and execution support",
            "Real-time code evaluation and feedback",
            "Secure authentication and user session management",
        ]
    },
    {
        title: "Smart Parking System",
        description: "A smart parking solution using QR codes to manage vehicle entry and exit efficiently. Features real-time database tracking for parking slots.",
        tags: ["Python", "HTML", "CSS", "SQL"],
        link: "https://github.com/Balaji-Sri-Ram/Smart-Parking-System",
        liveLink: null,
        date: "October 2025",
        image: smartParkingImg,
        keyFeatures: [
            "Real-time parking slot availability tracking",
            "Advance parking slot booking system",
            "Automated booking alerts and notifications",
            "Slot release and management functionality",
            "Web and mobile-based full-stack implementation",
        ]
    },
    {
        title: "PhotoBooth Chatbot",
        description: "An engaging AI chatbot for photo booths that interacts with users in real-time. Built with a Python backend and responsive frontend.",
        tags: ["Python", "Flask", "Dialogflow"],
        link: "https://github.com/Balaji-Sri-Ram/PhotoBooth-Chatbot",
        liveLink: "https://photo-booth-chatbot.vercel.app",
        date: "November 2024",
        image: photoboothImg,
        keyFeatures: [
            "AI-powered chatbot that analyzes and describes uploaded images",
            "Supports both image upload and real-time webcam capture",
            "Generates intelligent responses based on visual content",
            "Interactive chat-style UI for seamless user experience",
            "Integrates AI APIs for image understanding and response generation",
        ]
    },
    {
        title: "BYOD Management System",
        description: "Secure web-based BYOD management system for classrooms to monitor and control student devices in real time.",
        tags: ["PHP", "MySQL", "Tailwind", "JS"],
        link: "https://github.com/Balaji-Sri-Ram/BYOD",
        liveLink: null,
        date: "April 2025",
        image: byodImg,
        keyFeatures: [
            "Real-time device monitoring with online status tracking",
            "Device registration and management using unique identifiers (MAC address)",
            "Activity tracking and usage analytics for productivity insights",
            "Secure user authentication and session management",
            "Admin dashboard for centralized control and device management",
        ]
    }
];

const ProjectCard = ({ project, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-[85vw] md:w-[700px] lg:w-[750px] h-[50vh] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden bg-l-card dark:bg-white/5 border border-l-border dark:border-white/10 shadow-md hover:shadow-xl backdrop-blur-sm group hover:border-l-accent dark:hover:border-primary-cyan transition-all duration-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0 h-[45%] md:h-[60%] overflow-hidden">
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content Panel — expands up on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-l-card dark:bg-[#121212] border-t border-l-border dark:border-white/10 z-20 flex flex-col transition-all duration-500 ease-in-out"
                style={{
                    height: hovered ? '72%' : '45%',
                    padding: '20px 28px 18px',
                }}
            >
                {/* Header row: date + icons */}
                <div className="flex items-center justify-between mb-2 flex-shrink-0">
                    <span className="text-l-accent dark:text-primary-cyan font-mono text-sm tracking-wide font-semibold">
                        {project.date}
                    </span>
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative text-l-text-secondary dark:text-gray-100/70 hover:text-l-accent dark:hover:text-primary-cyan transition-colors"
                            >
                                <ArrowUpRight size={20} />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-l-text-primary dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    Live Link
                                </span>
                            </a>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link relative text-l-text-secondary dark:text-gray-100/70 hover:text-l-accent dark:hover:text-primary-cyan transition-colors"
                        >
                            <Github size={20} />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-l-text-primary dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-l-text-primary dark:text-gray-100 mb-2 leading-tight group-hover:text-l-accent dark:group-hover:text-primary-cyan transition-colors flex-shrink-0">
                    {project.title}
                </h2>

                {/* Description */}
                <p className="text-l-text-secondary dark:text-gray-text text-sm md:text-base leading-relaxed mb-3 flex-shrink-0">
                    {project.description}
                </p>

                {/* Key Features — revealed on hover */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0"
                    style={{
                        maxHeight: hovered ? '200px' : '0px',
                        opacity: hovered ? 1 : 0,
                        marginBottom: hovered ? '24px' : '0px',
                    }}
                >
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-l-accent dark:text-primary-cyan mb-2">
                        ✦ Key Features
                    </p>
                    <ul className="space-y-1">
                        {project.keyFeatures.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 group/feat">
                                {/* Accent dot — matches theme color */}
                                <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-l-accent dark:bg-primary-cyan opacity-60 group-hover/feat:opacity-100 transition-opacity duration-200" />
                                <span className="text-xs text-l-text-secondary dark:text-gray-text leading-snug group-hover/feat:text-l-accent dark:group-hover/feat:text-primary-cyan transition-colors duration-200">
                                    {feat}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags — always visible at bottom */}
                <div className="flex flex-wrap gap-2 mt-auto flex-shrink-0">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black dark:bg-primary-cyan/5 text-white dark:text-primary-cyan rounded-full border-none dark:border dark:border-primary-cyan/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [scrollRange, setScrollRange] = useState(["1%", "-60%"]);

    useEffect(() => {
        const updateRange = () => {
            if (window.innerWidth < 768) {
                setScrollRange(["1%", "-72%"]);
            } else {
                setScrollRange(["1%", "-60%"]);
            }
        };

        updateRange();
        window.addEventListener('resize', updateRange);
        return () => window.removeEventListener('resize', updateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], scrollRange);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-l-bg dark:bg-black transition-colors duration-500">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Large Background Title */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-0">
                    <h2 className="text-[12vw] font-bold text-l-border/20 dark:text-gray-100/[0.03] select-none leading-none tracking-tighter transition-colors duration-300">
                        SELECTED <br /> WORKS
                    </h2>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-8 md:gap-12 pl-[5vw] pr-[50vw] items-center z-10"
                >
                    {/* Intro Card */}
                    <div className="w-[85vw] md:w-[400px] lg:w-[450px] flex-shrink-0 flex flex-col justify-center text-l-text-primary dark:text-gray-100 p-6 md:p-12 transition-colors duration-300">
                        <div className="w-12 h-1 bg-l-accent dark:bg-primary-cyan mb-6 transition-colors duration-300 shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>
                        <h3 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Recent <br />
                            <span className="text-l-text-secondary dark:text-gray-text transition-colors duration-300">Projects</span>
                        </h3>
                        <p className="text-l-text-secondary dark:text-gray-text text-lg mb-8 transition-colors duration-300">
                            Solving complex problems with elegant code.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-mono animate-blink text-l-accent dark:text-primary-cyan transition-colors duration-300">
                            <span>SCROLL TO EXPLORE</span>
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Experience from './Experience';
import Achievements from './Achievements';
import Contact from './Contact';
import Navbar from './Navbar';
import leetcodeImg from '../assets/leetcode.png';

const Home = ({ theme, toggleTheme }) => {
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="bg-l-bg dark:bg-dark-bg transition-colors duration-300">
            <Hero theme={theme} />
            <AboutMe />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Experience theme={theme} />
            <Certifications theme={theme} />
            <Achievements theme={theme} />
            <Contact theme={theme} />
        </main>
            <footer className="bg-l-card/50 dark:bg-card-dark text-l-text-secondary dark:text-gray-text py-8 transition-colors border-t border-l-border dark:border-white/10">
                <div className="container mx-auto px-12 md:px-32 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/balaji-sri-ram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform hover:text-l-text-primary dark:hover:text-white"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/balaji-sri-ram-parasa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform hover:text-[#0077b5]"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://leetcode.com/u/ramu_parasa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:scale-110 transition-transform"
                            aria-label="LeetCode"
                        >
                            <img src={leetcodeImg} alt="LeetCode" className="w-6 h-6 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                        <a
                            href="https://www.instagram.com/ramu__parasa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform hover:text-[#E1306C]"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>

                    <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Parasa Balaji Sri Ram. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;

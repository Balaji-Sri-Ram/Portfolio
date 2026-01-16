import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -35% 0px', // Adjusts when a section is considered "active"
            threshold: 0.1
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-brown dark:text-white transition-colors">
                    PBSR<span className="text-beige dark:text-neon-green">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.name.toLowerCase();
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium relative group transition-all duration-700 ease-out bg-gradient-to-r bg-[length:200%_100%] bg-clip-text 
                                    ${isActive
                                        ? 'from-brown to-brown dark:from-neon-green dark:to-neon-green bg-[0%_0%] text-transparent'
                                        : 'from-brown to-charcoal dark:from-neon-green dark:to-gray-300 bg-[100%_0%] hover:text-brown dark:text-gray-300 dark:hover:text-neon-green'
                                    }`}
                                style={isActive ? { webkitTextFillColor: 'transparent' } : {}}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown dark:bg-neon-green transition-all group-hover:w-full"></span>
                            </a>
                        );
                    })}

                    <div className="flex items-center gap-4">
                        <div className="w-[2px] h-6 bg-gray-300 dark:bg-gray-600"></div>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-cream dark:bg-card-dark shadow-lg md:hidden flex flex-col items-center py-8 gap-6 transition-colors"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-brown dark:text-gray-300 dark:hover:text-neon-green"
                            >
                                {link.name}
                            </a>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

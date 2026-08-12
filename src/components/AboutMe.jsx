import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Mail } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-l-bg dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Animation Section - Slides in from Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.3 }}
                    className="flex justify-center md:justify-end relative"
                >
                    <div className="relative w-full max-w-md">
                        <CodingAnimation />
                    </div>
                </motion.div>

                {/* Text Content - Slides in from Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                    className="text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-l-text-primary dark:text-gray-100 mb-6 relative inline-block">
                        About <span className="text-l-accent dark:text-primary-cyan">Me</span>
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-l-accent dark:bg-primary-cyan rounded-full"></span>
                    </h2>

                    <div className="space-y-4 text-lg text-l-text-secondary/90 dark:text-gray-text leading-relaxed">
                        <p>
                            I’m <span className="font-semibold text-l-accent dark:text-primary-cyan">Balaji Sri Ram Parasa</span>, a final-year Computer Science Engineering student at Lovely Professional University and an aspiring Full-Stack Developer. I am dedicated to building strong programming fundamentals through hands-on projects and industry-relevant certifications.
                        </p>
                        <p>
                            I am passionate about developing efficient, scalable, and user-friendly software solutions. With a quick learning ability, strong problem-solving skills, and clear communication, I thrive in collaborative environments and continuously seek opportunities to learn new technologies and contribute to impactful projects.
                        </p>
                    </div>

                    <div className="mt-8">
                        <motion.a
                            href="https://leetcode.com/u/ramu_parasa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-3 bg-l-accent dark:bg-primary-cyan text-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-l-accent-hover hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                            <span className="text-xl font-bold">{"{ }"}</span>
                            View Coding Profile
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

// Sub-component to handle fetching to keep spacing clean
const CodingAnimation = () => {
    const [animationData, setAnimationData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://assets9.lottiefiles.com/packages/lf20_3ntisyac.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Lottie Load Error:", err));
    }, []);

    if (!animationData) return <div className="h-64 flex items-center justify-center text-l-accent dark:text-primary-cyan">Loading Animation...</div>;

    return <Lottie animationData={animationData} loop={true} />;
};

export default AboutMe;

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Mail } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-cream dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
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
                        {/* Decorative background glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brown/20 to-transparent dark:from-neon-green/10 dark:to-transparent rounded-full blur-3xl -z-10"></div>

                        {/* 
                            NOTE: lottie-react requires the JSON object. 
                            I'll use a public Lottie URL and fetch it.
                         */}
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
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 relative inline-block">
                        About <span className="text-brown dark:text-neon-green">Me</span>
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brown dark:bg-neon-green rounded-full"></span>
                    </h2>

                    <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            I’m <span className="font-semibold text-brown dark:text-neon-green">Balaji Sri Ram Parasa</span>, a 3rd-year Computer Science Engineering student and aspiring Full-Stack Developer from Lovely Professional University. I build strong programming fundamentals through hands-on projects and certifications, and I’m passionate about creating efficient, user-friendly software.
                        </p>
                        <p>
                            I’m a quick learner with strong problem-solving skills, clear communication, and a collaborative mindset, always eager to learn new technologies and contribute to impactful projects.
                        </p>
                    </div>

                    <div className="mt-8">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-brown dark:bg-neon-green text-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all cursor-pointer"
                        >
                            <Mail size={20} />
                            Contact Me
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

    if (!animationData) return <div className="h-64 flex items-center justify-center text-brown dark:text-neon-green">Loading Animation...</div>;

    return <Lottie animationData={animationData} loop={true} />;
};

export default AboutMe;

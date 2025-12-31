import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import TiltCard from './TiltCard';

const skillsData = [
    { category: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript"] },
    { category: "Frameworks & Libs", items: ["React.js", "Node.js", "Express", "Flask", "Tailwind CSS", "HTML/CSS"] },
    { category: "Tools & DB", items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"] },
    { category: "Soft Skills", items: ["Communication", "Problem-Solving", "Consistency", "Adaptability"] }
];

const Skills = ({ theme }) => {
    const spotlightColor = theme === 'light'
        ? "rgba(180, 140, 90, 0.4)"
        : "rgba(0, 255, 136, 0.4)";

    const images = [
        { src: "css3.svg", label: "CSS3" },
        { src: "html-5.svg", label: "HTML5" },
        { src: "js.svg", label: "JavaScript" },
        { src: "react.svg", label: "React" },
        { src: "php.svg", label: "PHP" },
        { src: "tailwind-css.svg", label: "Tailwind CSS" },
        { src: "java.svg", label: "Java" },
        { src: "c.svg", label: "C" },
        { src: "python.svg", label: "Python" },
    ];

    // Create duplicated array for infinite scroll effect
    const duplicatedImages = [...images, ...images];

    return (
        <section id="skills" className="py-20 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center text-charcoal dark:text-white"
                >
                    My Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((group, index) => (
                        <TiltCard key={group.category} className="h-full">
                            <SpotlightCard
                                spotlightColor={spotlightColor}
                                className="h-full p-6 rounded-2xl bg-cream dark:bg-card-dark border border-beige/30 dark:border-white/5 transition-all group"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-brown dark:text-neon-green border-b border-beige dark:border-gray-800 pb-2 inline-block">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-beige/20 dark:bg-white/5 text-charcoal dark:text-gray-300 text-sm px-3 py-1 rounded-md font-medium group-hover:text-brown dark:group-hover:text-neon-green transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </TiltCard>
                    ))}
                </div>
            </div>

            <div className="mt-10 w-full max-w-[1400px] h-[100px] overflow-hidden relative bg-transparent py-2 mx-auto">
                <motion.div
                    className="flex w-fit"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-cream/80 dark:bg-white/5 border border-brown/10 dark:border-white/5 backdrop-blur-sm group flex flex-col items-center justify-center w-[150px] h-[80px] mx-[10px] rounded-xl flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-brown dark:hover:border-neon-green cursor-pointer">
                            <img
                                src={img.src}
                                alt={img.label}
                                className={`w-[50px] h-[45px] object-cover rounded-xl transition-all duration-300 ${img.label === 'PHP' ? 'dark:brightness-0' : ''}`}
                            />
                            <p className="mt-2 text-sm font-medium text-charcoal dark:text-gray-300 transition-colors duration-300 group-hover:text-brown dark:group-hover:text-neon-green">
                                {img.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
};

export default Skills;

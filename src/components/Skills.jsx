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
        </section>
    );
};

export default Skills;

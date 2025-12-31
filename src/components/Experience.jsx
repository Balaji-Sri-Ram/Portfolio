import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container">
                <h2 className="text-4xl font-bold mb-16 text-center text-charcoal dark:text-white">Experience & Education</h2>

                <div className="max-w-3xl mx-auto space-y-12">
                    {/* Training */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="border-l-4 border-brown dark:border-neon-green pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">June 2025</span>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mt-2">Front-End Web Development Intern</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Gokboru Tech Pvt. Ltd.</p>
                        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-400 list-disc list-inside">
                            <li>Completed intensive 6-week training covering React.js, HTML, CSS, JavaScript.</li>
                            <li>Created a Task Manager web app to improve task organization.</li>
                            <li>Designed responsive interfaces for mobile and desktop.</li>
                        </ul>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border-l-4 border-beige dark:border-white/20 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">2023 - Present</span>
                        <h3 className="text-2xl font-bold text-charcoal dark:text-white mt-2">B.Tech in Computer Science & Engineering</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Lovely Professional University, Punjab</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-400">CGPA: 8.09</p>
                    </motion.div>

                    {/* Education 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="border-l-4 border-beige/50 dark:border-white/10 pl-6 py-2"
                    >
                        <span className="text-sm font-bold text-light-brown dark:text-neon-green uppercase tracking-wider">2021 - 2023</span>
                        <h3 className="text-xl font-bold text-charcoal dark:text-white mt-2">Intermediate</h3>
                        <p className="text-lg font-medium text-brown dark:text-gray-300">Aditya Junior College</p>
                        <p className="mt-2 text-gray-700 dark:text-gray-400">Percentage: 92%</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

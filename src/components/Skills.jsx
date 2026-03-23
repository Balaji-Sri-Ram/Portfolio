import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layers,
    GitBranch,
    Github,
    Server,
    Zap,
    Blocks,
    Triangle,
    Cloud,
    Send
} from 'lucide-react';

const JavaIcon = ({ size = 32 }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform group-hover:scale-110 transition-transform duration-300"
    >
        {/* Steam */}
        <path d="M10 2c.5 1-1 2 0 4M13 1c.5 1-1 2 0 4M7 2c.5 1-1 2 0 4" />
        {/* Cup Bands */}
        <path d="M6 10c4 1.5 8 1.5 12 0" />
        <path d="M5 13c5 2 10 2 14 0" />
        <path d="M4 16c6 2.5 12 2.5 16 0" />
        {/* Handle */}
        <path d="M18 12c1.5 0 2.5 1 2.5 2s-1 2-2.5 2" />
        {/* Saucer */}
        <path d="M3 20c6 2 12 2 18 0" />
    </svg>
);

const skillsGrouping = [
    {
        category: "Languages",
        skills: [
            { name: "Python", Icon: Terminal },
            { name: "JavaScript", Icon: Code2 },
            { name: "C++", Icon: Cpu },
            { name: "Java", Icon: JavaIcon },
            { name: "C", Icon: Cpu },
            { name: "HTML/CSS", Icon: Globe }
        ]
    },
    {
        category: "Frameworks & Libs",
        skills: [
            { name: "React.js", Icon: Layers },
            { name: "Node.js", Icon: Server },
            { name: "Express.js", Icon: Blocks },
            { name: "Flask", Icon: Terminal },
            { name: "Tailwind CSS", Icon: Zap }
        ]
    },
    {
        category: "Platforms & Tools",
        skills: [
            { name: "MongoDB", Icon: Database },
            { name: "Git", Icon: GitBranch },
            { name: "GitHub", Icon: Github },
            { name: "MySQL", Icon: Database },
            { name: "Vercel", Icon: Triangle },
            { name: "Render", Icon: Cloud },
            { name: "Postman", Icon: Send }
        ]
    }
];

const VisualSkillCard = ({ name, Icon, theme }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: theme === 'dark' ? "0 0 25px rgba(0, 255, 255, 0.15)" : "0 0 25px rgba(139, 115, 85, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-32 bg-white/50 dark:bg-[#111] border border-brown/10 dark:border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-default group hover:border-brown dark:hover:border-[#00ffff]/30 backdrop-blur-md transition-all duration-300"
        >
            <div className="text-brown/40 dark:text-[#e5e5e5]/40 group-hover:text-brown dark:group-hover:text-[#00ffff] transition-colors duration-300 transform group-hover:scale-110">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <span className="text-charcoal dark:text-[#e5e5e5] text-sm font-medium tracking-wide group-hover:text-brown dark:group-hover:text-[#00ffff] transition-colors duration-300">
                {name}
            </span>
        </motion.div>
    );
};

const SkillCategory = ({ category, skills, theme }) => (
    <div className="mb-20 last:mb-0 w-full max-w-6xl">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 mb-10"
        >
            <h3 className="text-brown dark:text-[#00ffff] text-xs font-mono uppercase tracking-[0.5em] whitespace-nowrap">
                {category}
            </h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-brown/20 dark:from-[#00ffff]/20 via-brown/5 dark:via-[#00ffff]/5 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                    <VisualSkillCard {...skill} theme={theme} />
                </motion.div>
            ))}
        </div>
    </div>
);

const Skills = ({ theme }) => {
    return (
        <section id="skills" className="min-h-screen w-full bg-l-bg dark:bg-[#0a0a0a] py-32 relative overflow-hidden flex flex-col items-center transition-colors duration-500">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: theme === 'dark' ? 'radial-gradient(#fff 1px, transparent 0)' : 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '60px 60px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-[#1a1a1a] dark:text-[#e5e5e5] tracking-tighter uppercase mb-6 leading-none">
                        Tech Stack
                    </h2>
                    <div className="w-16 h-[2px] bg-brown dark:bg-[#00ffff]/30 mx-auto mb-6" />
                    <p className="text-[#1a1a1a]/40 dark:text-[#e5e5e5]/30 text-[10px] whitespace-pre uppercase tracking-[0.5em] font-mono">
                        Consistency &bull; Scalability &bull; Efficiency
                    </p>
                </motion.div>

                {/* Categorized Grids */}
                {skillsGrouping.map((group) => (
                    <SkillCategory key={group.category} {...group} theme={theme} />
                ))}
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brown/5 dark:bg-[#00ffff]/2 rounded-full blur-[120px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brown/5 dark:bg-[#00ffff]/2 rounded-full blur-[120px] -z-0 pointer-events-none" />
        </section>
    );
};

export default Skills;

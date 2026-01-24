import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { flushSync } from 'react-dom';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const handleToggle = async (e) => {
        if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            toggleTheme();
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        const right = window.innerWidth - x;
        const bottom = window.innerHeight - y;
        const maxRadius = Math.hypot(
            Math.max(x, right),
            Math.max(y, bottom)
        );

        const transition = document.startViewTransition(() => {
            flushSync(() => {
                toggleTheme();
            });
        });

        await transition.ready;

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className="p-2 rounded-full bg-charcoal/10 dark:bg-neon-green/20 text-charcoal dark:text-neon-green transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;

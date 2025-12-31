import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorFollower = ({ theme }) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 100 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const isLight = theme === 'light';
    const gradient = isLight
        ? "radial-gradient(circle, rgba(180, 140, 90, 0.6) 0%, rgba(180, 140, 90, 0.3) 40%, rgba(0, 0, 0, 0) 70%)"
        : "radial-gradient(circle, rgba(0, 255, 136, 0.25) 0%, rgba(0, 255, 136, 0.1) 40%, rgba(0, 0, 0, 0) 70%)";

    // Light mode needs 'normal' or 'multiply' to show the dark color against light bg. 'screen' washes it out.
    const blendMode = isLight ? 'normal' : 'screen';

    return (
        <motion.div
            className="cursor-follower hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                background: gradient,
                mixBlendMode: blendMode
            }}
        />
    );
};

export default CursorFollower;

import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, className = "", direction = "up" }) {
  const directionOffset = 40;
  
  const variants = {
    up: {
      hidden: { y: directionOffset, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    down: {
      hidden: { y: -directionOffset, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    left: {
      hidden: { x: -directionOffset, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    right: {
      hidden: { x: directionOffset, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }
  };

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

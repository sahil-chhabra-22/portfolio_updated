import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let frame: number;
    let iteration = 0;

    const startAnimation = () => {
      setIsAnimating(true);
      
      const animate = () => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        });

        if (iteration >= text.length) {
          setIsAnimating(false);
          cancelAnimationFrame(frame);
        } else {
          iteration += 1 / 3; // Speed of unscrambling
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
    };

    timeout = setTimeout(startAnimation, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [text, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className={`inline-block ${className} ${isAnimating ? 'text-indigo-400' : ''} transition-colors duration-300`}
    >
      {displayText}
    </motion.span>
  );
};

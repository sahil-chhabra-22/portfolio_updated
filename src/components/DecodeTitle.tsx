import React, { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

interface DecodeTitleProps {
  text: string;
  className?: string;
}

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export const DecodeTitle: React.FC<DecodeTitleProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let frame: number;
    let iteration = 0;

    const animate = () => {
      setDisplayText(() => {
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
        cancelAnimationFrame(frame);
      } else {
        iteration += 1 / 3;
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, text]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
    >
      {displayText || text.replace(/./g, "_")}
    </motion.span>
  );
};

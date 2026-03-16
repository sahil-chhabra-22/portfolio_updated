import React, { useState, useEffect } from "react";

interface HoverScrambleTextProps {
  text: string;
  className?: string;
}

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export const HoverScrambleText: React.FC<HoverScrambleTextProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

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
  }, [isHovered, text]);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block cursor-default ${className} ${isHovered ? 'text-indigo-400' : ''} transition-colors duration-300`}
    >
      {displayText}
    </span>
  );
};

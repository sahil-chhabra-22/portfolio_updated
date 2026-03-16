import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import resumeData from "../data/resume.json";
import { DecodeTitle } from "./DecodeTitle";

const Word: React.FC<{ children: string; progress: any; range: [number, number] }> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["#475569", "#e2e8f0"]); // slate-600 to slate-200
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative inline-block mr-2 mt-2">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity, color, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
};

export const About: React.FC = () => {
  const { basics } = resumeData;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Split the summary into words
  const words = basics.summary.split(/(\s+)/).filter((w) => w.trim().length > 0);

  return (
    <section id="about" className="relative py-32 px-6 sm:px-12 lg:px-24 bg-slate-950/50">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="About Me" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div 
          ref={containerRef}
          className="text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-snug lg:leading-snug font-medium max-w-4xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import resumeData from "../data/resume.json";
import { HoverScrambleText } from "./HoverScrambleText";
import { DecodeTitle } from "./DecodeTitle";

export const Education: React.FC = () => {
  const { education } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="education"
      className="relative py-24 px-6 sm:px-12 lg:px-24 bg-slate-950/50"
    >
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Education" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-colors group-hover:border-slate-700/80"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                <HoverScrambleText text={edu.degree} />
              </h3>
              
              <motion.div 
                className="cursor-pointer inline-block"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.h4 
                  whileHover={{ color: '#818cf8' }}
                  className="text-lg text-indigo-300 font-medium mb-4 flex items-center gap-2"
                >
                  <HoverScrambleText text={edu.institution} />
                  <motion.svg 
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    className="w-4 h-4 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.h4>
              </motion.div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 mb-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong>Specialization:</strong> VLSI (Very Large Scale Integration)<br/>
                        <strong>Key Focus:</strong> Mixed Signal Designing, Verilog, Cadence
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                {edu.dates && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-mono">
                    {edu.dates}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

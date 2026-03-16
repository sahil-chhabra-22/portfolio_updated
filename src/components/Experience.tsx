import React from "react";
import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { SpotlightCard } from "./SpotlightCard";
import { HoverScrambleText } from "./HoverScrambleText";
import { DecodeTitle } from "./DecodeTitle";

export const Experience: React.FC = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Experience" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-0"
            >
              <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-[15px]" />

              <div className="sm:ml-12 relative group">
                <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500/50 flex items-center justify-center group-hover:border-indigo-400 transition-colors hidden sm:flex z-10">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        <HoverScrambleText text={job.role} />
                      </h3>
                      <h4 className="text-lg text-indigo-300 font-medium mt-1">
                        <HoverScrambleText text={job.company} />
                      </h4>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm font-mono whitespace-nowrap self-start sm:self-auto">
                      {job.dates}
                    </span>
                  </div>

                  {job.bullets && job.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {job.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-slate-400 flex items-start gap-3"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { SpotlightCard } from "./SpotlightCard";
import { DecodeTitle } from "./DecodeTitle";
import { HoverScrambleText } from "./HoverScrambleText";

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-slate-950/50">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Skills" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 sm:p-8">
                <h4 className="text-xl text-indigo-300 font-medium mb-6">
                  <HoverScrambleText text={skillGroup.category} />
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/80 text-slate-200 text-sm font-medium border border-slate-700/50 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

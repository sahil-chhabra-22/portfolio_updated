import React from "react";
import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { SpotlightCard } from "./SpotlightCard";
import { HoverScrambleText } from "./HoverScrambleText";
import { DecodeTitle } from "./DecodeTitle";

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <DecodeTitle text="Projects" />
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </motion.div>

        {projects && projects.length > 0 ? (
          <div className="grid gap-12">
            {projects.map((projectGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  <HoverScrambleText text={projectGroup.category} />
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {projectGroup.items.map((item, i) => (
                    <SpotlightCard key={i} className="p-6 sm:p-8 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                          <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-medium">
                          {item}
                        </p>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <SpotlightCard className="p-8 inline-block">
              <p className="text-slate-400 text-lg">
                Currently working on exciting projects. Check back soon!
              </p>
            </SpotlightCard>
          </motion.div>
        )}
      </div>
    </section>
  );
};
